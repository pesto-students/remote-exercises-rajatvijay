const isObject = (item) => item !== undefined && item !== null;
const getLength = (item) => item.length;
const isCallable = (fn) => typeof fn === 'function';

function forEach(item, callback, thisArg) {
  if (!isObject(item)) {
    throw new Error(`TypeError: can't conver ${item} to object`);
  }
  if (!isCallable(callback)) {
    throw new Error(`TypeError: ${callback} is not a function`);
  }
  const length = getLength(item);

  // eslint-disable-next-line
  for (let i = 0; i < length; i++) {
    callback.call(thisArg, item[String(i)], i, item);
  }
}

function map(item, callback, thisArg) {
  if (!isObject(item)) {
    throw new Error(`TypeError: can't conver ${item} to object`);
  }
  if (!isCallable(callback)) {
    throw new Error(`TypeError: ${callback} is not a function`);
  }
  const length = getLength(item);

  const result = [];
  // eslint-disable-next-line
  for (let i = 0; i < length; i++) {
    result.push(callback.call(thisArg, item[String(i)], i, item));
  }

  return result;
}

function filter(item, callback, thisArg) {
  if (!isObject(item)) {
    throw new Error(`TypeError: can't conver ${item} to object`);
  }
  if (!isCallable(callback)) {
    throw new Error(`TypeError: ${callback} is not a function`);
  }
  const length = getLength(item);
  const result = [];
  // eslint-disable-next-line
  for (let i = 0; i < length; i++) {
    const output = callback.call(thisArg, item[String(i)], i, item);
    if (output) {
      result.push(item[String(i)]);
    }
  }

  return result;
}

// function reduce(item, callback, initialValue) {
//   if (!isObject(item)) {
//     throw new Error(`TypeError: can't conver ${item} to object`);
//   }
//   if (!isCallable(callback)) {
//     throw new Error(`TypeError: ${callback} is not a function`);
//   }
//   const length = getLength(item);
//   let previousValue = initialValue;
//   for (let i = 0; i < length; i++) {
//     previousValue = callback(previousValue, item[String(i)], i, item);
//   }

//   return previousValue;
// }

export { forEach, map, filter };
