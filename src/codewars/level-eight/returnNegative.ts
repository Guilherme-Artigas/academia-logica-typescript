export function makeNegative(num: number): number {
  if (num <= 0) return num;

  return num - (num * 2);
}
