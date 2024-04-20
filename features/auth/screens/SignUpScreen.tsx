import { SafeAreaView } from 'react-native-safe-area-context';

import { SignUpWizard } from '../components/SignUpWizard';

export function SignUpScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <SignUpWizard />
    </SafeAreaView>
  );
}
