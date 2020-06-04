function freqSort(input) {
  return input
    .map((str) => str.normalize())
    .sort((item1, item2) => (item1 - item2 > 0 ? 1 : -1))
    .filter((item, index, arr) => arr.indexOf(item) === index);
}

export { freqSort };
