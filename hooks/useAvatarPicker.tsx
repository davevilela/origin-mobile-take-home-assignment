import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useControllableState } from 'tamagui';
export type AvatarPickerProps = {
  /**
   * Default URL of uploaded image
   */
  url?: string;
  /**
   * Default URI of local image
   */
  uri?: string | null;
  onChange?: (value: string | null) => void;
};
export function useAvatarPicker({ onChange, uri }: AvatarPickerProps = {}) {
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const [image, setImage] = useControllableState<string | null>({
    prop: uri,
    onChange,
    defaultProp: null,
  });

  const pickImage = async () => {
    if (!mediaLibraryPermission?.granted && !mediaLibraryPermission?.canAskAgain) {
      Alert.alert(
        'Permission not granted',
        "We don't have your permission to access your media library. Go to your system settings and grant the permission to continue"
      );
      return;
    }

    const permissionResult = await requestMediaLibraryPermission();
    if (!permissionResult.granted) {
      Alert.alert('Permission not granted', 'Please grant permission to execute this action.');
      return;
    }

    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      exif: false,
    });

    console.log(result);

    if (!result.canceled) {
      const image = result.assets?.[0];
      setImage(image.uri);
    }
  };

  const takePhoto = async () => {
    if (!cameraPermission?.granted && !cameraPermission?.canAskAgain) {
      Alert.alert(
        'Permission not granted',
        "We don't have your permission to access your camera. Go to your system settings and grant the permission to continue"
      );
      return;
    }

    const permissionResult = await requestCameraPermission();
    if (!permissionResult.granted) {
      Alert.alert('Permission not granted', 'Please grant permission to execute this action.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      exif: false,
      cameraType: ImagePicker.CameraType.front,
      selectionLimit: 1,
      mediaTypes: MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      const image = result.assets?.[0];
      setImage(image.uri);
    }
  };

  return {
    takePhoto,
    pickImage,
    image,
    removeImage: () => setImage(null),
  };
}
// 1.000.000 B
