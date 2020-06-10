const onChange = (obj, onChangeFn) => {
  const handler = {
    get(...args) {
      const value = Reflect.get(...args);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(...args) {
      return Reflect.set(...args);
    },
    defineProperty(...args) {
      onChangeFn();
      return Reflect.defineProperty(...args);
    },
    deleteProperty(...args) {
      onChangeFn();
      return Reflect.deleteProperty(...args);
    },
  };
  return new Proxy(obj, handler);
};

export { onChange };
