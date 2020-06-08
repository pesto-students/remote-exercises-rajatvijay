const sortAlphabets = (word) => word.split('').sort().join('');

const countingAnagrams = (str) => {
  if (typeof str !== 'string') {
    throw new Error(`TypeError: Expected a string but got ${typeof str}`);
  }
  const anagrams = str.split(' ').reduce((acc, word) => {
    if (word.length < 2) {
      return acc;
    }
    const sortedWord = sortAlphabets(word);
    if (acc[sortedWord]) {
      acc[sortedWord].push(word);
      return acc;
    }
    acc[sortedWord] = [];
    return acc;
  }, {});
  return Object.values(anagrams).filter((values) => values.length).length;
};

export { countingAnagrams };
