export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const doubleAgeSon = sonYearsOld * 2;

  return Math.abs(dadYearsOld - doubleAgeSon);
}
