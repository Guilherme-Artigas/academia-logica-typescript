export function reverseSeq(n: number): number[] {
  const list = [];
  for (let i = n; i >= 1; i--) {
    list.push(i);
  }

  return list;
}
