export function getRealFloor(n: number): number {
  let result = 0;

  if (n >= 1) result = n - 1;

  if (n >= 13) result = n - 2;

  if (n < 0) result = n;

  return result;
}
