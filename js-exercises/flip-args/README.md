# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function () {
  return _.toArray(arguments);
});

flipped("a", "b", "c", "d");
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**

1. Funtion that applied the same mathematical operation in the reverse order

### **What test cases can you add to the test file?**

_Add the relevant test-cases in the test file_

# Restrictions

- Don't use any libraries
