import { Plus } from '@tamagui/lucide-icons';
import { Image } from 'expo-image';
import { PropsWithChildren } from 'react';
import { Alert } from 'react-native';
import { YStack, Circle } from 'tamagui';

import { ImagePickerMenu } from './ImagePickerMenu';

import { ImagePickerProps, useImagePicker } from '~/hooks/useImagePicker';

export function AvatarPickerCard({
  onImagePicked,
  uri,
  url,
  maxSize,
  onImageRemoved = () => null,
  children,
  disabled,
}: PropsWithChildren<
  ImagePickerProps & { maxSize?: number; onImageRemoved?: () => void; disabled?: boolean }
>) {
  const { pickImage, takePhoto, image, removeImage } = useImagePicker({ onImagePicked, uri, url });

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
    <YStack bg="$gray2" br="$6" ai="center" jc="center" p="$true" gap="$true">
      <ImagePickerMenu remove={!!image} onSelect={onPickerOption}>
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
      </ImagePickerMenu>

      {children}
    </YStack>
  );
}
