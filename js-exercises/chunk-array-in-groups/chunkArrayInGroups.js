class TwoDimensionalArray {
  constructor() {
    this.array = [];
  }

  push(index, item) {
    if (!this.array[index]) {
      this.array[index] = [];
    }
    this.array[index].push(item);
    return this;
  }

  valueOf() {
    return this.array;
  }
}

function chunkArrayInGroups(array, chunkSize) {
  const groups = new TwoDimensionalArray();
  for (let index = 0; index < array.length; index += 1) {
    const groupIndex = Math.floor(index / chunkSize);
    groups.push(groupIndex, array[index]);
  }
  return groups.valueOf();
}

export { chunkArrayInGroups };
