function count(n, step = 1) {
  return (function* iterInfinite() {
    yield n;

    let last = n;
    while (true) {
      const next = last + step;
      last = next;
      yield next;
    }
  }());
}

function cycle(iterable, times = Infinity) {
  return (function* iterInfinite() {
    let timesRepeated = 0;
    let iterator = iterable[Symbol.iterator]();
    while (true) {
      const item = iterator.next();
      if (!item.done) {
        yield item.value;
      } else {
        timesRepeated += 1;
        if (timesRepeated !== times) {
          iterator = iterable[Symbol.iterator]();
        } else {
          return;
        }
      }
    }
  }());
}

function repeat(num, times = Infinity) {
  return (function* iterInfinite() {
    let timesRepeated = 0;
    while (true) {
      if (timesRepeated !== times) {
        timesRepeated += 1;
        yield num;
      } else {
        return;
      }
    }
  }());
}

export { count, cycle, repeat };
