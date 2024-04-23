import { Link } from 'expo-router';

import { CustomAvatar } from './ui/CustomAvatar';

import { useProfile } from '~/features/auth/hooks/useProfile';

export function CurrenUserAvatar() {
  const { profile } = useProfile();

  return (
    <Link href="/profile">
      <CustomAvatar
        size="$2.5"
        username={profile.full_name || ''}
        fallbackType="image"
        src={profile.avatarUrl!}
      />
    </Link>
  );
}
