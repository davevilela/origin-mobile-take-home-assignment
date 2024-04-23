import type { IconProps } from '@tamagui/helpers-icon';
import { WalletCards, Receipt, Banknote, Landmark } from '@tamagui/lucide-icons';
import { ThemeName } from 'tamagui';

import { TransactionTypes } from './types/transactions';

type TransactionUIConfig = {
  IconComponent: React.NamedExoticComponent<IconProps>;
  theme: ThemeName;
  formatTransactionValue: (value: number) => number;
};

export const transactionUIConfigurations: Record<TransactionTypes, TransactionUIConfig> = {
  deposit: {
    IconComponent: WalletCards,
    theme: 'green_alt1', // More descriptive theme name
    formatTransactionValue: (value) => value, // Deposit values are shown as is.
  },
  invoice: {
    IconComponent: Receipt,
    theme: 'orange_alt1', // More descriptive theme name
    formatTransactionValue: (value) => -value, // Invoices typically represent deductions.
  },
  payment: {
    IconComponent: Banknote,
    theme: 'red_alt1', // More descriptive theme name
    formatTransactionValue: (value) => -value, // Payments typically represent deductions.
  },
  withdrawal: {
    IconComponent: Landmark,
    theme: 'red_alt1', // More descriptive theme name
    formatTransactionValue: (value) => -value, // Withdrawals typically represent deductions.
  },
};
