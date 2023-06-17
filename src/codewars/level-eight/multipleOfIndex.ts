export function multipleOfIndex(array: number[]): number[] {
  const newList = [];

  for (let index = 0; index <= array.length; index++) {
    if (array[index] % index === 0 || array[index] === 0) newList.push(array[index]);
  }

  return newList;
}
