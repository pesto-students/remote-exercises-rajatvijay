function betterStringLib() {
  return {
    equal: (string1, string2) => string1.normalize() === string2.normalize(),
  };
}

export { betterStringLib };
