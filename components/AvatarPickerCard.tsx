import { Plus } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import { PropsWithChildren } from 'react';
import { Alert } from 'react-native';
import { YStack, Circle } from 'tamagui';
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

export function AvatarPickerCard({
  onImagePicked,
  uri,
  url,
  maxSize,
  onImageRemoved = () => null,
  children,
  disabled,
}: PropsWithChildren<
  AvatarPickerProps & { maxSize?: number; onImageRemoved?: () => void; disabled?: boolean }
>) {
  const { pickImage, takePhoto, image, removeImage } = useAvatarPicker({ onImagePicked, uri, url });

  const onPickerOption = async (mode: 'camera' | 'mediaLibrary' | 'removeImage') => {
    switch (mode) {
      case 'camera':
        takePhoto();
        break;
      case 'mediaLibrary': {
        const result = await pickImage({ maxSize });

        if (result?.error) {
          Alert.alert(result.error);
        }
        break;
      }
      case 'removeImage':
        removeImage();
        onImageRemoved?.();
        break;
      default:
        break;
    }
  };

  return (
    <YStack
      pointerEvents={disabled ? 'none' : 'unset'}
      bg="$gray2"
      br="$6"
      ai="center"
      jc="center"
      p="$true"
      gap="$true">
      <AvatarPickerMenu remove={!!image} onSelect={onPickerOption}>
        <Circle pressTheme bg="$gray6" size="$15" theme="alt2" overflow="hidden">
          {image || url ? (
            <Image
              source={{ uri: image || url }}
              style={{ flex: 1, height: '100%', width: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Plus size="$8" strokeWidth={3} />
          )}
        </Circle>
      </AvatarPickerMenu>

      {children}
    </YStack>
  );
}
