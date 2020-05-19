function duplicateLetters(word) {
  const { countOfMaximumDuplicate } = word.split('').reduce(
    (acc, char) => {
      // Update in the duplicate map
      if (!(char in acc.duplicateMap)) {
        acc.duplicateMap[char] = 0;
      }
      acc.duplicateMap[char] += 1;

      // Update the max duplicate count
      if (acc.duplicateMap[char] > acc.countOfMaximumDuplicate) {
        acc.countOfMaximumDuplicate = acc.duplicateMap[char];
      }

      return acc;
    },
    {
      countOfMaximumDuplicate: 0,
      duplicateMap: {},
    },
  );

  return countOfMaximumDuplicate <= 1 ? false : countOfMaximumDuplicate;
}

export { duplicateLetters };
