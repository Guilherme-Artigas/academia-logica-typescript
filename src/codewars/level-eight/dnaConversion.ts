export function DNAtoRNA(dna: string): string {
  let result = '';
  for (const letter of dna) {
    if (letter !== 'T') {
      result += letter;
    } else {
      result += 'U';
    }
  }

  return result;
}
