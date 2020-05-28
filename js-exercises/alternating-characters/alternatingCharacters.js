const ALTERNATE_MAP = { A: 'B', B: 'A' };

const isAnAlternatingPair = (char1, char2) => ALTERNATE_MAP[char1] === char2;

const alternatingCharacters = (string) => {
  const chars = string.split('');

  // eslint-disable-next-line
  const alternatingPairs = chars.filter((char, index) => {
    return index === 0 ? true : isAnAlternatingPair(char, chars[index - 1]);
  });

  return chars.length - alternatingPairs.length;
};

function alternatingCharactersFromArray(arr) {
  return arr.map(alternatingCharacters);
}

export { alternatingCharactersFromArray as alternatingCharacters };
