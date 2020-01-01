export function formatNumber(number) {
  if (!parseFloat(number)) return number;
  return parseFloat(number).toFixed(2);
}

export const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£'
};
