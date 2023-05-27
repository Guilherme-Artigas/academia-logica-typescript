export function findAverage(array: number[]): number {
  if (array.length === 0) return 0;

  return array.reduce((acc, curr) => acc += curr, 0) / array.length;
}
