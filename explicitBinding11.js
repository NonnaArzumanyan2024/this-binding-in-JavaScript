/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` that takes two parameters `a` and `b`, returning an array [this.x, a, b].

  Then it calls:
    obj.foo.call({x:100}, [10, 20]);

  Explanation:
    - `.call()` expects arguments to be passed individually, not as an array.
    - Here, `[10, 20]` is passed as the first argument `a`.
    - The second parameter `b` is `undefined` because only one argument after `this` is provided.
    - So inside `foo`:
        - `this.x` is 100 (from explicit binding)
        - `a` is `[10, 20]` (the array)
        - `b` is `undefined`

  The console will print:  
    [100, [10, 20], undefined]

Explicit binding: `.call()` explicitly sets `this` and passes arguments individually.
*/




let obj = {
  x: 42,

  foo(a, b) {
    return [this.x, a, b];
  }
}

const result = obj.foo.call({x:100}, [10, 20]);
console.log(result);  // Output: [100, [10, 20], undefined]
