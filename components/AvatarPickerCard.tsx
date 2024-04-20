import { Plus } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import { PropsWithChildren } from 'react';
import { YStack, Circle, Text } from 'tamagui';
import * as DropdownMenu from 'zeego/dropdown-menu';

import { AvatarPickerProps, useAvatarPicker } from '~/hooks/useAvatarPicker';

function AvatarPickerMenu({
  children,
  onSelect,
  remove,
}: {
  children: React.ReactElement;
  onSelect?: (mode: 'camera' | 'mediaLibrary' | 'removeImage') => void;
  remove?: boolean;
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          onSelect={() => {
            onSelect?.('camera');
          }}
          key="camera">
          <DropdownMenu.ItemTitle>Take Picture</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            onSelect?.('mediaLibrary');
          }}
          key="mediaLibrary">
          <DropdownMenu.ItemTitle>Pick image from gallery</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
        {!!remove && (
          <DropdownMenu.Item
            destructive
            onSelect={() => {
              onSelect?.('removeImage');
            }}
            key="removeImage">
            <DropdownMenu.ItemTitle>Remove image</DropdownMenu.ItemTitle>
          </DropdownMenu.Item>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export function AvatarPickerCard({ onChange, uri, url }: AvatarPickerProps) {
  const { pickImage, takePhoto, image, removeImage } = useAvatarPicker({ onChange, uri, url });
  return (
    <YStack bg="$gray1" br="$6" ai="center" jc="center" p="$true" gap="$true">
      <AvatarPickerMenu
        remove={!!image}
        onSelect={(mode) => {
          switch (mode) {
            case 'camera':
              takePhoto();
              break;
            case 'mediaLibrary':
              pickImage();
              break;
            case 'removeImage':
              removeImage();
              break;
            default:
              break;
          }
        }}>
        <Circle pressTheme bg="$gray6" size="$15" theme="alt2" overflow="hidden">
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ flex: 1, height: '100%', width: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Plus size="$8" strokeWidth={3} />
          )}
        </Circle>
      </AvatarPickerMenu>

      {image ? (
        <Text>WOW! Great Picture 📸 We're all set-up!</Text>
      ) : (
        <Text>Click to add a picture</Text>
      )}
    </YStack>
  );
}
