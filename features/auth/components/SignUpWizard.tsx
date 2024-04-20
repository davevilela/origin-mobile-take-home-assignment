import { zodResolver } from '@hookform/resolvers/zod';
import {
  Fingerprint,
  PersonStanding,
  Plus,
  ScanFace,
  Smile,
  Sparkles,
} from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';
import React, { createContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { Button, Card, Circle, Form, H2, SizableText, Spinner, YStack } from 'tamagui';
import { z } from 'zod';

import { StepTitle } from './StepHeader';
import {
  PasswordConfirmationSchema,
  UserDataSchema,
  UserSignUpSchema,
} from '../schemas/signUpSchema';

import { AvatarPickerCard } from '~/components/AvatarPickerCard';
import { StepItem, Stepper } from '~/components/Stepper';
import { FieldControl } from '~/components/ui/FieldControl';
import { FlushInput } from '~/components/ui/FlushInput';
import { SecureEntryButton } from '~/components/ui/SecureEntryButton';
import { useSupabase } from '~/lib/supabase/useSupabase';

const steps: StepItem[] = [
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

export function SignUpWizard() {
  const ctx = useSignUpWizard();
  return (
    <SignUpWizardContext.Provider value={ctx}>
      <YStack f={1} p="$7" pt="0" jc="space-between">
        <Stepper f={1} gap="$3" steps={steps} initialStepIndex={0} />
      </YStack>
    </SignUpWizardContext.Provider>
  );
}

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
  const [secureEntry, setSecureEntry] = useState(true);
  const loading = false;

  const { setData, data } = useSignUpWizardContext();
  const form = useForm<z.infer<typeof PasswordConfirmationSchema>>({
    resolver: zodResolver(PasswordConfirmationSchema),
    defaultValues: {
      ...data,
    },
  });

  return (
    <YStack jc="flex-end" f={1} gap="$4">
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
        render={({ next, prev }) => (
          <>
            <Button chromeless onPress={() => prev()}>
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

function UserAvatarStep() {
  const { setData, data, onSubmit } = useSignUpWizardContext();
  return (
    <YStack jc="flex-end" f={1} gap="$4">
      <StepTitle
        title="Take a selfie"
        subtitle="Dont forget to smile!"
        icon={<ScanFace size="$4" strokeWidth={3} />}
      />
      <AvatarPickerCard
        uri={data.avatarUrl}
        onChange={(avatarUrl) => {
          setData((old) => ({ ...old, avatarUrl: avatarUrl || null }));
        }}
      />
      <SizableText theme="alt1">Max size: 1mb</SizableText>
      <Stepper.Footer
        render={({ prev, next }) => (
          <>
            <Button chromeless theme="blue_alt2" size="$5" onPress={() => prev()}>
              Go Back
            </Button>

            <Button
              theme="accent"
              size="$5"
              onPress={() => {
                onSubmit();
                next();
              }}>
              {data.avatarUrl ? 'Continue' : 'Skip for now...'}
            </Button>
          </>
        )}
      />
    </YStack>
  );
}

function ConclusionStep() {
  const { setData, data, onSubmit } = useSignUpWizardContext();
  return (
    <YStack jc="flex-end" f={1} gap="$4">
      <StepTitle
        title="Almost done..."
        subtitle="Getting things ready"
        icon={<Sparkles size="$4" strokeWidth={3} />}
      />

      <Stepper.Footer
        render={({ prev, next }) => (
          <Button
            theme="accent"
            size="$5"
            onPress={() => {
              // onSubmit();
              // next();
            }}>
            <Spinner />
          </Button>
        )}
      />
    </YStack>
  );
}

type UserSignUpData = Partial<UserSignUpSchema> & {
  avatarUrl?: string | null;
};

export function useSignUpWizard() {
  const router = useRouter();
  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = useSupabase();

  const [data, setData] = useState<UserSignUpData>({});

  const onSubmit = async () => {
    try {
      setLoading(true);
      const { avatarUrl, ...formData } = data;
      const parsedData = UserSignUpSchema.safeParse(formData);
      if (!parsedData.success) return false;

      const {
        data: { email, password, name },
      } = parsedData;
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        switch (error.code) {
          case 'user_already_exists':
            router.back();
            Alert.alert('An error has occurred', error.message);
            break;

          default:
            break;
        }
      }
      if (avatarUrl) {
        const arraybuffer = await fetch(avatarUrl).then((res) => res.arrayBuffer());
        const fileExt = avatarUrl?.split('.').pop()?.toLowerCase() ?? 'jpeg';
        const path = `${Date.now()}.${fileExt}`;
        const { data, error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(path, arraybuffer, {
            contentType: `image/${fileExt}`,
          });

        if (uploadError) {
          throw uploadError;
        }
      }

      // supabase.from('profiles').upsert()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
      router.replace('/');
    }
  };

  return {
    data,
    onSubmit,
    loading,
    setData,
  };
}

type UseSignUpWizardValue = ReturnType<typeof useSignUpWizard>;

const SignUpWizardContext = createContext<UseSignUpWizardValue>({} as UseSignUpWizardValue);

const useSignUpWizardContext = () => React.useContext(SignUpWizardContext);
