import { zodResolver } from '@hookform/resolvers/zod';
import { isAuthApiError } from '@supabase/supabase-js';
import { Fingerprint, PersonStanding, ScanFace, Sparkles } from '@tamagui/lucide-icons';
import { Link, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, AlertButton, AlertOptions } from 'react-native';
import { Button, Form, SizableText, Spinner, YStack, Text } from 'tamagui';
import { z } from 'zod';

import { StepTitle } from './StepHeader';
import { useSignUpWithEmail } from '../hooks/useSignUpWithEmail';
import { UserSignUpData, useSignUpWizardContext } from '../hooks/useSignUpWizard';
import { PasswordConfirmationSchema, UserDataSchema } from '../schemas/signUpSchema';

import { AvatarPickerCard } from '~/components/AvatarPickerCard';
import { StepItem, Stepper, useStepperContext } from '~/components/Stepper';
import { AlertBanner } from '~/components/ui/AlertBanner';
import { FieldControl } from '~/components/ui/FieldControl';
import { FlushInput } from '~/components/ui/FlushInput';
import { SecureEntryButton } from '~/components/ui/SecureEntryButton';
import { useUploadFile } from '~/hooks/useUploadFile';
import { formatBytes } from '~/lib/helpers';
import { useSupabase } from '~/lib/supabase/useSupabase';
import { useAuth } from '~/providers/auth/AuthProvider';
import { upsertUserProfile } from '~/services/user';

export const SignUpSteps: StepItem[] = [
  {
    key: 'basic_data',
    renderItem: BasicUserDataStep,
  },
  {
    key: 'password',
    renderItem: UserPasswordStep,
  },
  {
    key: 'user_avatar',
    renderItem: UserAvatarStep,
  },
  {
    key: 'conclusion',
    renderItem: ConclusionStep,
  },
];

function BasicUserDataStep() {
  const { setData, data } = useSignUpWizardContext();
  const form = useForm<UserDataSchema>({
    resolver: zodResolver(UserDataSchema),
    defaultValues: {
      ...data,
    },
  });

  return (
    <YStack jc="flex-end" f={1} gap="$4">
      <StepTitle
        title="Let's get you set up"
        subtitle="Tell us your name and your best email"
        icon={<PersonStanding size="$4" strokeWidth={3.5} />}
      />
      <Form asChild onSubmit={() => {}}>
        <YStack jc="flex-start" gap="$true">
          <Controller
            control={form.control}
            name="name"
            render={(control) => (
              <FieldControl
                name={control.field.name}
                errorMessage={control.fieldState.error?.message}>
                <FlushInput
                  onChangeText={control.field.onChange}
                  value={control.field.value}
                  label="Name"
                  placeholder="Jon Doe"
                  autoCapitalize="words"
                />
              </FieldControl>
            )}
          />

          <Controller
            control={form.control}
            name="email"
            render={(control) => (
              <FieldControl
                name={control.field.name}
                errorMessage={control.fieldState.error?.message}>
                <FlushInput
                  onChangeText={control.field.onChange}
                  value={control.field.value}
                  label="Email"
                  placeholder="jon@doe.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </FieldControl>
            )}
          />
        </YStack>
      </Form>
      <Stepper.Footer
        render={({ next, prev, hasPrev }) => (
          <>
            <Button
              chromeless
              onPress={() => prev()}
              disabled={!hasPrev}
              disabledStyle={{ opacity: 0.4 }}>
              Go Back
            </Button>

            <Button
              theme="accent"
              size="$5"
              onPress={form.handleSubmit((values) => {
                setData((old) => ({ ...old, ...values }));
                next();
              })}>
              Continue
            </Button>
          </>
        )}
      />
    </YStack>
  );
}

function UserPasswordStep() {
  const { next } = useStepperContext();
  const router = useRouter();
  const [signUp, { loading, error }] = useSignUpWithEmail();
  const [secureEntry, setSecureEntry] = useState(true);

  const { setData, data } = useSignUpWizardContext();
  const dataRef = useRef(data);
  dataRef.current = data;
  const form = useForm<z.infer<typeof PasswordConfirmationSchema>>({
    resolver: zodResolver(PasswordConfirmationSchema),
    defaultValues: {
      ...data,
    },
  });

  function handleApiError(error: Error) {
    let alertParams: {
      title: string;
      message?: string;
      buttons?: AlertButton[];
      options?: AlertOptions;
    } | null;
    if (isAuthApiError(error)) {
      switch (error.code) {
        case 'user_already_exists':
          alertParams = {
            title: error.message,
            message: `Please Sign-in with your account.`,
            buttons: [
              {
                onPress(value) {
                  router.back();
                },
                isPreferred: true,
              },
            ],
          };
          break;
        default:
          alertParams = {
            title: 'An error has occurred',
            message: 'Please, try again.',
          };
          break;
      }
    } else {
      alertParams = {
        title: 'An error has occurred',
        message: error.message,
      };
    }

    if (alertParams) {
      Alert.alert(alertParams.title, alertParams.message, alertParams.buttons);
    }
  }

  const handleSubmit = form.handleSubmit(async (formValues) => {
    const userSignUpData: UserSignUpData = { ...dataRef.current, ...formValues };
    setData(userSignUpData);

    const result = await signUp(userSignUpData);

    if (result.error) {
      handleApiError(result.error);
      return;
    }

    next();
  });

  return (
    <YStack jc="flex-end" f={1} gap="$4">
      {!!error && <AlertBanner status="warning" title={error.message} />}
      <StepTitle
        title="Set up a password"
        subtitle="Shh, Don't let anyone know your secrets..."
        icon={<Fingerprint size="$4" strokeWidth={3} />}
      />
      <Form disabled={loading} asChild onSubmit={() => {}}>
        <YStack gap="$true">
          <Controller
            control={form.control}
            name="password"
            render={(control) => (
              <FieldControl
                name={control.field.name}
                errorMessage={control.fieldState.error?.message}>
                <FlushInput
                  label="Password"
                  autoCapitalize="none"
                  placeholder="*******"
                  onChangeText={control.field.onChange}
                  value={control.field.value}
                  secureTextEntry={secureEntry}
                  rightElement={
                    <SecureEntryButton isSecure={secureEntry} onChange={setSecureEntry} />
                  }
                />
              </FieldControl>
            )}
          />

          <Controller
            control={form.control}
            name="passwordConfirmation"
            render={(control) => (
              <FieldControl
                name={control.field.name}
                errorMessage={control.fieldState.error?.message}>
                <FlushInput
                  label="Password Confirmation"
                  autoCapitalize="none"
                  placeholder="*******"
                  onChangeText={control.field.onChange}
                  value={control.field.value}
                  secureTextEntry={secureEntry}
                  rightElement={
                    <SecureEntryButton isSecure={secureEntry} onChange={setSecureEntry} />
                  }
                />
              </FieldControl>
            )}
          />
          <SizableText theme="alt1">
            The passwords must match and have at least 6 characters
          </SizableText>
        </YStack>
      </Form>

      <Stepper.Footer
        render={({ prev }) => (
          <>
            <Button disabled={loading} chromeless onPress={() => prev()}>
              Go Back
            </Button>
            <Button disabled={loading} theme="accent" size="$5" onPress={handleSubmit}>
              {loading ? <Spinner color="white" /> : 'Continue'}
            </Button>
          </>
        )}
      />
    </YStack>
  );
}

const maxAvatarSize = 5_000_000;

function UserAvatarStep() {
  const { session } = useAuth();
  const supabase = useSupabase();
  const { setData, data } = useSignUpWizardContext();
  const [uploadFile, { loading }] = useUploadFile();
  const { next } = useStepperContext();

  const handleUpload = async () => {
    if (!session?.user.id) {
      Alert.alert(
        'You are unauthenticated',
        'This action can only be performed by an authenticated user.'
      );
      return;
    }

    const result = await uploadFile({
      uri: data.avatarUrl!,
    });

    if (result.error) {
      Alert.alert(result.error);
      return;
    }

    const updateResult = await upsertUserProfile(supabase, {
      id: session?.user.id!,
      avatar_url: result.downloadUrl,
    });

    if (updateResult.error) {
      Alert.alert(updateResult.error.message);
      return;
    }

    next();
  };

  return (
    <YStack jc="flex-end" f={1} gap="$4">
      <StepTitle
        title="Take a selfie"
        subtitle="Dont forget to smile!"
        icon={<ScanFace size="$4" strokeWidth={3} />}
      />
      <AvatarPickerCard
        uri={data.avatarUrl}
        disabled={loading}
        onImagePicked={(avatarUrl) => {
          setData((old) => ({ ...old, avatarUrl: avatarUrl || null }));
        }}
        maxSize={maxAvatarSize}>
        {data.avatarUrl ? (
          <Text>WOW! Great Picture 📸 We're all set-up!</Text>
        ) : (
          <Text>Click to add a picture</Text>
        )}
      </AvatarPickerCard>
      <SizableText theme="alt1">Max size: {formatBytes(maxAvatarSize)}</SizableText>
      <Stepper.Footer
        render={({ next }) => (
          <>
            <Button
              chromeless
              disabled={loading}
              onPress={() => {
                next();
              }}>
              Skip for now...
            </Button>
            <Button
              theme="accent"
              size="$5"
              disabled={!data.avatarUrl}
              disabledStyle={{ opacity: 0.6 }}
              onPress={() => {
                handleUpload();
              }}>
              {loading ? <Spinner color="white" /> : 'Continue'}
            </Button>
          </>
        )}
      />
    </YStack>
  );
}

function ConclusionStep() {
  return (
    <YStack jc="flex-end" f={1} gap="$4">
      <StepTitle
        title="You're all set up!"
        subtitle="Click next to start using the app."
        icon={<Sparkles size="$4" strokeWidth={3} />}
      />

      <Stepper.Footer
        render={() => (
          <Link href="/" replace asChild>
            <Button theme="accent" size="$5">
              Next
            </Button>
          </Link>
        )}
      />
    </YStack>
  );
}
