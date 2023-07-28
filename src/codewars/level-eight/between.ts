export function between(a: number, b: number): Array<number> {
  const newList: Array<number> = [];

  for (let i = a; i <= b; i++) {
    newList.push(i);
  }

  return newList;
}
