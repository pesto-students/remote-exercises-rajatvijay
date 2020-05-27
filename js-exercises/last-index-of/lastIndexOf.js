function lastIndexOf(item, array) {
  const reverseIndex = [...array].reverse().indexOf(item);
  return reverseIndex === -1 ? reverseIndex : array.length - 1 - reverseIndex;
}

export { lastIndexOf };
