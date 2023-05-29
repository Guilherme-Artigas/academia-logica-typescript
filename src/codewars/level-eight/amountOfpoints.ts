export function points(games: string[]): number {
  let sum = 0;
  games.forEach(match => {
    if (Number(match[0]) > Number(match[2])) sum += 3;
    if (Number(match[0]) === Number(match[2])) sum += 1;
  });

  return sum;
}
