/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` that logs `this.x`

  Then it performs:
    obj.foo.bind({x:100}).call({x:10});

  Explanation:
    - `.bind({x:100})` creates a new function with `this` permanently bound to `{x:100}`.
    - `.call({x:10})` invokes this bound function immediately, but
      for bound functions, the `this` provided by `.call()` is ignored.
    - Therefore, `this` inside `foo` remains `{x:100}` regardless of `.call()`.

  The console will print: 100

  Binding types involved:
    - "explicit binding" with `.bind()`: fixes `this` permanently.
    - `.call()` attempts explicit binding but is ignored because the function is already bound.

*/




let obj = {
  x: 42,

  foo() {
    console.log(this.x);
  }
}

obj.foo.bind({x:100}).call({x:10});  // Output: 100
