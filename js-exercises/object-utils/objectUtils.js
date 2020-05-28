const spreadAndApply = (fn) => (args) => fn(...args);

const map = (obj, mapper) => {
  const entries = Object.entries(obj).map(spreadAndApply(mapper));
  return Object.fromEntries(entries);
};

const filter = (obj, predicate) => {
  const entries = Object.entries(obj).filter(spreadAndApply(predicate));
  return Object.fromEntries(entries);
};

const invert = (obj) => map(obj, (key, value) => [value, key]);

const merge = (objects) => objects.reduce((result, obj) => ({ ...result, ...obj }), {});

const every = (obj, predicate) => Object.entries(obj).every(spreadAndApply(predicate));

const some = (obj, predicate) => Object.entries(obj).some(spreadAndApply(predicate));

export {
  map, filter, invert, merge, every, some,
};
