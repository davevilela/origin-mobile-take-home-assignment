import { useMutation } from '@tanstack/react-query';

import { useSupabase } from '~/lib/supabase/useSupabase';
import { uploadFile } from '~/services/uploadFile';

export function useUploadFile(bucket: string) {
  const supabase = useSupabase();
  const mutation = useMutation({
    mutationFn: ({ uri }: { uri: string }) => uploadFile(supabase, { bucket, uri }),
  });

  return mutation;
}
