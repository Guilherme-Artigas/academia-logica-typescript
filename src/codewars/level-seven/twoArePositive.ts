export function twoArePositive(a: number, b: number, c: number): boolean {
  const list = [a, b, c].filter(e => e > 0);

  return list.length === 2;
}
