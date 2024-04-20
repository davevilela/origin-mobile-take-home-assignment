import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

import { SignUpSteps } from './SignUpSteps';
import { SignUpWizardContext, useSignUpWizard } from '../hooks/useSignUpWizard';

import { Stepper } from '~/components/Stepper';

export function SignUpWizard() {
  const ctx = useSignUpWizard();
  const insets = useSafeAreaInsets();
  return (
    <SignUpWizardContext.Provider value={ctx}>
      <YStack f={1} px="$7" pb={insets.bottom + 20} jc="space-between" bg="$background">
        <Stepper f={1} gap="$3" steps={SignUpSteps} initialStepIndex={0} />
      </YStack>
    </SignUpWizardContext.Provider>
  );
}
