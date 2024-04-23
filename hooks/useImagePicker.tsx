import { getInfoAsync } from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';
import { Alert } from 'react-native';
import { useControllableState } from 'tamagui';

import { formatBytes } from '~/lib/helpers';

export type ImagePickerProps = {
  /**
   * Default URL of uploaded image
   */
  url?: string;
  /**
   * Default URI of local image
   */
  uri?: string | null;
  onImagePicked?: (value: string | null) => void;
};
export function useImagePicker({ onImagePicked, uri }: ImagePickerProps = {}) {
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const [image, setImage] = useControllableState<string | null>({
    prop: uri,
    onChange: onImagePicked,
    defaultProp: null,
  });

  const pickImage = async ({ maxSize }: { maxSize?: number } = {}) => {
    if (!mediaLibraryPermission?.granted && !mediaLibraryPermission?.canAskAgain) {
      Alert.alert(
        'Permission not granted',
        "We don't have your permission to access your media library. Go to your system settings and grant the permission to continue"
      );
      return { error: 'Permission not granted' };
    }

    const permissionResult = await requestMediaLibraryPermission();

    if (!permissionResult.granted) {
      Alert.alert('Permission not granted', 'Please grant permission to execute this action.');
      return { error: 'Permission not granted' };
    }

    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      exif: false,
    });

    if (result.canceled) return null;

    const image = result.assets?.[0];
    const fileInfo = await getInfoAsync(image.uri, { size: true });

    if (fileInfo.isDirectory || !fileInfo.exists) {
      return {
        error: 'Invalid file',
      };
    }
    const maxSizeExceeded = !!maxSize && fileInfo.size > maxSize;

    if (maxSizeExceeded) {
      return {
        error: `Max size of ${formatBytes(maxSize)} exceeded`,
      };
    }

    setImage(image.uri);

    return {
      uri: image.uri,
    };
  };

  const takePhoto = async (params: { cameraType?: ImagePicker.CameraType } = {}) => {
    const { cameraType = ImagePicker.CameraType.front } = params;
    if (!cameraPermission?.granted && !cameraPermission?.canAskAgain) {
      Alert.alert(
        'Permission not granted',
        "We don't have your permission to access your camera. Go to your system settings and grant the permission to continue"
      );
      return { error: 'Permission not granted' };
    }

    const permissionResult = await requestCameraPermission();

    if (!permissionResult.granted) {
      Alert.alert('Permission not granted', 'Please grant permission to execute this action.');
      return { error: 'Permission not granted' };
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      exif: false,
      cameraType,
      selectionLimit: 1,
      mediaTypes: MediaTypeOptions.Images,
    });
    if (result.canceled) {
      return null;
    }
    const image = result.assets?.[0];

    setImage(image.uri);

    return {
      uri: image.uri,
    };
  };

  return {
    takePhoto,
    pickImage,
    image,
    removeImage: () => setImage(null),
  };
}
