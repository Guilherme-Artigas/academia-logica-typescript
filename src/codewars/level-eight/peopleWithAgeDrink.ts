export function peopleWithAgeDrink(old: number): string {
  let report = '';
  if (old < 17) report = 'drink toddy';
  if (old > 13 && old < 18) report = 'drink coke';
  if (old > 17 && old < 21) report = 'drink beer';
  if (old > 20) report = 'drink whisky';

  return report;
}
