import { Image } from 'expo-image';
import { Avatar, AvatarProps, SizableText } from 'tamagui';

function getInitials(name: string): string {
  return name.split(' ').reduce((prev, curr) => (prev += curr.charAt(0).toUpperCase()), '');
}
export function CustomAvatar(
  props: Pick<AvatarProps, 'size'> & {
    src?: string;
    username: string;
    fallbackType?: 'initials' | 'image';
  }
) {
  const { username, size, src, fallbackType = 'initials' } = props;
  const initials = getInitials(username);
  const fallbackUrl = `https://avatar.vercel.sh/${initials}`;
  return (
    <Avatar bg="$gray4" circular size={size}>
      <Avatar.Image accessibilityLabel={username} src={src} />
      <Avatar.Fallback delayMs={600} backgroundColor="$gray4" ai="center" jc="center">
        {fallbackType === 'image' ? (
          <Image
            style={{ height: '100%', width: '100%' }}
            source={fallbackUrl!}
            contentFit="cover"
            cachePolicy="disk"
            transition={200}
          />
        ) : (
          <SizableText size={size as any} color="$color10">
            {initials}
          </SizableText>
        )}
      </Avatar.Fallback>
    </Avatar>
  );
}
