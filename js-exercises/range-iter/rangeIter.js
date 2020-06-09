class RangeIterator {
  constructor(lb, ub) {
    this.lb = lb;
    this.ub = ub;
  }

  * [Symbol.iterator]() {
    for (let i = this.lb; i <= this.ub; i += 1) {
      yield i;
    }
  }
}

function rangeIter(lb, ub) {
  if (lb === undefined || ub === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  return new RangeIterator(lb, ub);
}

export { rangeIter };
