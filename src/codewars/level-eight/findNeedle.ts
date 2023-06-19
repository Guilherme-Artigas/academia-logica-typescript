export function findNeedle(haystack: any[]): string {
  const i = haystack.indexOf('needle');

  return `found the needle at position ${i}`;
}
