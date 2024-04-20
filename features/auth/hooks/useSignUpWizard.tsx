import React, { useState, createContext } from 'react';

import { UserSignUpSchema } from '../schemas/signUpSchema';

export type UserSignUpData = Partial<UserSignUpSchema> & {
  avatarUrl?: string | null;
};

export function useSignUpWizard() {
  const [data, setData] = useState<UserSignUpData>({});

  return {
    data,

    setData,
  };
}

export type UseSignUpWizardValue = ReturnType<typeof useSignUpWizard>;

export const SignUpWizardContext = createContext<UseSignUpWizardValue>({} as UseSignUpWizardValue);

export const useSignUpWizardContext = () => React.useContext(SignUpWizardContext);
