export function arrayPlusArray(arr1: number[], arr2: number[]): number {
  const firstArray = arr1.reduce((acc, cur) => acc += cur, 0);
  const secondArray = arr2.reduce((acc, cur) => acc += cur, 0);

  return firstArray + secondArray;
}
