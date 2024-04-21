import { formatDistanceToNow } from 'date-fns';
import prettyBytes from 'pretty-bytes';

export function formatBytes(bytes: number) {
  return prettyBytes(bytes);
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
}
// formatDistanceToNow(new Date(item.Date), { addSuffix: true })

export function formatDateDistance(date: Date) {
  return formatDistanceToNow(date, { addSuffix: true });
}
