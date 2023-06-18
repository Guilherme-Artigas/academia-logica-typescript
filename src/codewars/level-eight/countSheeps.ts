export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
  const result = arrayOfSheep.reduce((acc, cur) => cur === true ? acc += 1 : acc, 0);

  return result;
}
