export function findMultiples(integer: number, limit: number): number[] {
  const listMultiples = [];
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    result = integer * i;
    if (result <= limit) listMultiples.push(result);
  }

  return listMultiples;
}
