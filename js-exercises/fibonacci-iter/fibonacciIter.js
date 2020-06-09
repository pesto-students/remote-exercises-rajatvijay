const fibonacciIter = {
  * [Symbol.iterator]() {
    yield 1;

    let last = 1;
    let secondLast = 1;
    while (true) {
      const current = last + secondLast;
      secondLast = last;
      last = current;
      yield current;
    }
  },
};

export { fibonacciIter };
