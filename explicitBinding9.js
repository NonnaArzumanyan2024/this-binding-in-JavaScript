/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` that takes two parameters `a` and `b`, returning an array [this.x, a, b].

  The line:
    const result = obj.foo.apply({x:100}, 10, 20);

  Causes an error because:
    - `.apply()` expects the second argument to be an array (or array-like object)
      containing the arguments to pass to the function.
    - Here, `10` and `20` are passed as separate arguments instead of inside an array.
    - Since `10` is a number (not iterable), Node.js throws:
      TypeError: CreateListFromArrayLike called on non-object.

  Correct usage:
    const result = obj.foo.apply({x:100}, [10, 20]);

  This calls `foo` with `this` set to `{x:100}`, passing `10` and `20` as arguments.

  The console will print: [100, 10, 20]

  "Explicit binding": `.apply()` explicitly sets `this` and passes arguments as an array.
*/




// Incorrect usage — will throw an error:
const obj = {
  x: 42,
  foo(a, b) {
    return [this.x, a, b];
  }
}

// Uncommenting below will throw an error:
// const result = obj.foo.apply({x:100}, 10, 20);

// Correct usage:
const result = obj.foo.apply({x:100}, [10, 20]);
console.log(result); // Output: [100, 10, 20]
