import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { View } from 'tamagui';

export default function Modal() {
  return (
    <>
      {/* <ScreenContent path="app/modal.tsx" title="Modal" /> */}
      <View />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
