import { z } from 'zod';

export const UserDataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export type UserDataSchema = z.infer<typeof UserDataSchema>;

export const PasswordSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
  passwordConfirmation: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long.' }),
});

export const PasswordConfirmationSchema = PasswordSchema.refine(
  (values) => {
    return values.password === values.passwordConfirmation;
  },
  {
    message: 'Passwords must match.',
    path: ['passwordConfirmation'],
  }
);
export type PasswordConfirmationSchema = z.infer<typeof PasswordConfirmationSchema>;

export const UserSignUpSchema = UserDataSchema.merge(PasswordSchema);

export type UserSignUpSchema = z.infer<typeof UserSignUpSchema>;
