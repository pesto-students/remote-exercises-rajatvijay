function longestWordInString(string) {
  const words = string.split(' ');
  return words.reduce(
    (maxLength, word) => Math.max(word.length, maxLength),
    words[0].length,
  );
}

export { longestWordInString };
