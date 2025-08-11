export function formatQuantity(unitsList: string[], bytesPerSecond: number, locale = 'en-US'): string {
  let unitIndex: number = 0;

  let value: number = bytesPerSecond;

  while (value >= 1024 && unitIndex < unitsList.length - 1) {
    value /= 1024;

    unitIndex++;
  }

  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return `${formatter.format(value)} ${unitsList[unitIndex]}`;
}

export function formatPercentage(value: number, isProportion: boolean): string {
  if (isProportion) {
    value *= 100;
  }

  return `${value.toFixed(0)}%`;
}
