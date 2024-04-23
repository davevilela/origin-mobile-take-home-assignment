import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getPublicFileUrl } from '~/lib/helpers';
import { useSupabase } from '~/lib/supabase/useSupabase';
import { useAuth } from '~/providers/auth/AuthProvider';

const keys = {
  profiles: ['profiles'],
  profile: (id: string) => [...keys.profiles, id],
};

export function useProfile() {
  const supabase = useSupabase();
  const { session } = useAuth();
  const user = session?.user;

  const { data, isLoading, refetch } = useQuery({
    networkMode: 'offlineFirst',
    staleTime: 5000,
    queryKey: keys.profile(user?.id!),
    queryFn: async () => {
      if (!user?.id) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      if (error) {
        if (error.code === 'PGRST116') {
          await supabase.auth.signOut();
          return null;
        }
        throw new Error(error.message);
      }
      return data;
    },
  });
  const avatarUrl = useMemo(() => {
    return data?.avatar_url
      ? getPublicFileUrl(supabase, { fileKey: data?.avatar_url, bucket: 'avatars' })
      : null;
  }, [supabase, data?.avatar_url]);

  const profile = { ...(data || {}), avatarUrl, email: user?.email };
  return { profile, isLoading, refetch };
}
