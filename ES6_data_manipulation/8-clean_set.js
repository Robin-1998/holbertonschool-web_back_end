export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const result = [];
  for (const b of set) {
    if (typeof b === 'string' && b.startsWith(startString)) {
      result.push(b.slice(startString.length));
    }
  }
  return result.join('-');
}
