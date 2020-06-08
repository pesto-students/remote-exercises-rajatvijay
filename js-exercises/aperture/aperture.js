function NTuples(n) {
  this.tupleLength = n;
  this.tuples = [[]];
  this.currentIndex = 0;
}

NTuples.prototype.push = function (item) {
  if (this.tuples[this.currentIndex].length < this.tupleLength) {
    return this.tuples[this.currentIndex].push(item);
  }

  this.currentIndex += 1;
  this.tuples[this.currentIndex] = [item];
  return 1;
};

NTuples.prototype.valueOf = function () {
  return this.tuples;
};

function aperture(n, list) {
  const tuples = new NTuples(n);
  if (n > list.length) {
    return [];
  }

  for (let outer = 0; outer <= list.length - n; outer += 1) {
    for (let inner = outer; inner < outer + n; inner += 1) {
      tuples.push(list[inner]);
    }
  }

  return tuples.valueOf();
}

export { aperture };
