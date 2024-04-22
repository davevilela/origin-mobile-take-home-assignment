import { zodResolver } from '@hookform/resolvers/zod';
import { AuthApiError } from '@supabase/supabase-js';
import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Paragraph,
  Text,
  YStack,
  Button,
  ScrollView,
  ThemeableStack,
  Form,
  Spinner,
  H1,
  H3,
} from 'tamagui';
import { z } from 'zod';

import { FieldControl } from '~/components/ui/FieldControl';
import { FlushInput } from '~/components/ui/FlushInput';
import { SecureEntryButton } from '~/components/ui/SecureEntryButton';
import { useSafeAreaInsets } from '~/hooks/useSafeAreaInsets';
import { useSupabase } from '~/lib/supabase/useSupabase';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
});

function useCredentialsSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthApiError | null>(null);
  const supabase = useSupabase();

  async function signInWithCredentials({ email, password }: z.infer<typeof SignInSchema>) {
    setLoading(true);
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return response;
    } catch (error) {
      if (error instanceof AuthApiError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return [signInWithCredentials, { loading, error }] as const;
}

export const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const [secureEntry, setSecureEntry] = useState(true);
  const [signIn, { loading }] = useCredentialsSignIn();

  const router = useRouter();
  const params = useLocalSearchParams<{ email?: string }>();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    // defaultValues: isDev ? { email: 'root@example.com', password: 'root' } : undefined,
  });

  useEffect(() => {
    if (params?.email) {
      router.setParams({ email: '' });
    }
  }, [params?.email]);

  async function signInWithEmail({ email, password }: z.infer<typeof SignInSchema>) {
    const res = await signIn({
      email,
      password,
    });

    if (!res?.data.session || !!res.error) {
      const errorMessage = res?.error?.message || 'Unexpected Error';
      form.setError('password', { type: 'custom', message: errorMessage });
    } else {
      router.replace('/');
    }
  }

  const onSubmit = form.handleSubmit(signInWithEmail);

  return (
    <YStack pb={insets.bottom} f={1} ai="center" position="relative">
      <ScrollView
        w="100%"
        px="$7"
        h="100%"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        contentContainerStyle={{
          justifyContent: 'space-between',
          h: '100%',
          gap: '$5',
        }}>
        <YStack mt="$14" ai="center">
          <H1 fontFamily="$mono" fontWeight="800">
            Fintrack
          </H1>
          <H3 fontFamily="$mono" textAlign="center">
            Track your expenses at the speed of thought.
          </H3>
        </YStack>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={40}>
          <Form disabled={loading} asChild onSubmit={onSubmit}>
            <YStack w="100%" gap="$3">
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
                      label="Your Email"
                      placeholder="jon@doe.com"
                      autoCapitalize="none"
                      keyboardType="email-address"
                    />
                  </FieldControl>
                )}
              />

              <Controller
                control={form.control}
                name="password"
                render={(control) => (
                  <FieldControl
                    name={control.field.name}
                    errorMessage={control.fieldState.error?.message}>
                    <FlushInput
                      label="Password"
                      secureTextEntry={secureEntry}
                      autoCapitalize="none"
                      placeholder="*******"
                      onChangeText={control.field.onChange}
                      value={control.field.value}
                      rightElement={
                        <SecureEntryButton isSecure={secureEntry} onChange={setSecureEntry} />
                      }
                    />
                  </FieldControl>
                )}
              />

              <Button
                onPress={async () => {
                  onSubmit();
                }}
                size="$5"
                theme="accent"
                bordered
                disabled={loading}>
                {loading && <Spinner />}
                Login
              </Button>

              <ThemeableStack my="$1" w="100%" bordered />
              <YStack ai="center" gap="$4">
                <Link asChild href="/(auth)/sign-up">
                  <Button size="$5" bg="$backgroundPress" w="100%">
                    Sign-up now
                  </Button>
                </Link>
              </YStack>
            </YStack>
          </Form>
        </KeyboardAvoidingView>
      </ScrollView>

      <Text mt="$3" color="white">
        V0.0.1
      </Text>
    </YStack>
  );
};

const ForgotPasswordLink = () => {
  return (
    <Link href="/(auth)/sign-in">
      <Paragraph textDecorationLine="underline" ta="center">
        Forgot
      </Paragraph>
    </Link>
  );
};
