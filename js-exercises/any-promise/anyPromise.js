function anyPromise(iterable) {
  return new Promise((resolve) => {
    const generatorObject = iterable[Symbol.iterator]();
    let length = 0;
    let fulfilled = 0;

    let next = generatorObject.next();
    length = 1;
    while (!next.done) {
      const promise = next.value;
      promise
        .then((response) => resolve(response))
        .catch(() => {
          fulfilled += 1;
          // eslint-disable-next-line
          if (fulfilled === length) {
            resolve(undefined);
          }
        });
      next = generatorObject.next();
      if (!next.done) {
        length += 1;
      }
    }
  });
}

// Cant determine the length using this approach
// return new Promise((resolve) => {
//   let fulfilled = 0;
//   for (let promise of iterable) {
//     promise
//       .then((response) => resolve(response))
//       .catch(() => {
//         fulfilled++;
//         if (fulfilled === iterable.length) {
//           resolve(undefined);
//         }
//       });
//   }
// });

export { anyPromise };
