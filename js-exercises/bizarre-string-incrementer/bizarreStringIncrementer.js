const paritySum = (string, number) => String(+string + number).padStart(string.length, '0');

function bizarreStringIncrementer(string) {
  const match = string.split(/(\d+$)/).filter(Boolean);
  return match[0] + paritySum(match[1] || '0', 1);
}

export { bizarreStringIncrementer };
