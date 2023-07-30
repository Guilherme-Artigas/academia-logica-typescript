export function basicOp(operation: string, value1: number, value2: number): number {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;

  return 0;
}
