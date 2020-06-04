const isObject = (item) => item !== undefined && item !== null;
const getLength = (item) => item.length;
const isCallable = (fn) => typeof fn === 'function';

function reduce(item, callback, initialValue) {
  if (!isObject(item)) {
    throw new Error(`TypeError: can't conver ${item} to object`);
  }
  if (!isCallable(callback)) {
    throw new Error(`TypeError: ${callback} is not a function`);
  }
  const length = getLength(item);

  let accumulator;
  let hasValue = false;
  let i = 0;
  if (initialValue === undefined) {
    // eslint-disable-next-line
    for (; i < length; i++) {
      if (hasValue) {
        break;
      }
      if (String(i) in item) {
        accumulator = item[String(i)];
        hasValue = true;
      }
    }

    if (!hasValue) {
      throw new Error('TypeError: reduce of empty array with no initial value');
    }
  } else {
    accumulator = initialValue;
  }

  // eslint-disable-next-line
  for (; i < length; i++) {
    accumulator = callback(accumulator, item[String(i)], i, item);
  }

  return accumulator;
}

function forEach(item, callback, thisArg) {
  // if (!isObject(item)) {
  //   throw new Error(`TypeError: can't conver ${item} to object`);
  // }
  // if (!isCallable(callback)) {
  //   throw new Error(`TypeError: ${callback} is not a function`);
  // }
  // const length = getLength(item);

  // // eslint-disable-next-line
  // for (let i = 0; i < length; i++) {
  //   callback.call(thisArg, item[String(i)], i, item);
  // }

  // Not sure if this is the right way
  // since it returns something and we are plainly ignoring it
  // But this helps in reusing the validation and looping logic
  // from reduce method
  reduce(
    item,
    (acc, ...restArgs) => {
      callback.call(thisArg, ...restArgs);
      return acc;
    },
    null,
  );
}

function map(item, callback, thisArg) {
  return reduce(
    item,
    (acc, ...restArgs) => {
      acc.push(callback.call(thisArg, ...restArgs));
      return acc;
    },
    [],
  );
}

function filter(item, callback, thisArg) {
  return reduce(
    item,
    (acc, value, ...restArgs) => {
      const output = callback.call(thisArg, value, ...restArgs);
      if (output) {
        acc.push(value);
      }
      return acc;
    },
    [],
  );
}

export {
  forEach, map, filter, reduce,
};
