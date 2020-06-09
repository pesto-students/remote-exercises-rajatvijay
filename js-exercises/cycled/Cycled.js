class Cycled {
  constructor(array) {
    this.array = array;
    this.currentIndex = 0;
    this.generatorObject = this.iterCyclic();
  }

  next() {
    this.index += 1;
    return this.current();
  }

  previous() {
    this.index -= 1;
    return this.current();
  }

  current() {
    return this.generatorObject.next().value;
  }

  step(index) {
    this.index = index;
    return this.current();
  }

  reversed() {
    this.array = [...this.array].reverse();
    return this;
  }

  indexOf(...args) {
    return this.array.indexOf(...args);
  }

  set index(index) {
    const len = this.array.length;
    const remainder = index % len;
    if (remainder < 0) {
      this.currentIndex = remainder + len;
    } else {
      this.currentIndex = remainder;
    }
  }

  get index() {
    return this.currentIndex;
  }

  * iterCyclic() {
    while (true) {
      yield this.array[this.index];
    }
  }

  [Symbol.iterator]() {
    return this;
  }
}

export { Cycled };
