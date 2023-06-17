export function likes(a: string[]): string {
  let result = '';

  if (a.length === 1) return result = `${a[0]} likes this`;

  if (a.length === 2) return result = `${a[0]} and ${a[1]} like this`;

  if (a.length === 3) return result = `${a[0]}, ${a[1]} and ${a[2]} like this`;

  if (a.length > 3) return result = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;

  result = 'no one likes this';

  return result;
}
