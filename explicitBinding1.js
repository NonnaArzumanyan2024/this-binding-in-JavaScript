/*
  This code defines an object `obj` with:
    - a property `x` set to 42
    - a method `foo` that logs `this.x`

  Then it performs:
    obj.foo.bind({x:100}).bind({x:200}).call({x:300});

  Explanation:
    - `.bind()` returns a new function with `this` permanently bound to the first argument.
    - Binding again on an already bound function has NO effect; the original binding stays.
    - `.call()` invokes the function immediately, but on a bound function, `.call()`'s `this` argument is ignored.
  
  So:
    - First `.bind({x:100})` creates a new function with `this` fixed to `{x:100}`.
    - Second `.bind({x:200})` attempts to bind again, but has no effect.
    - `.call({x:300})` calls the bound function, but the `this` inside is still `{x:100}` (first bind).
  
  Therefore, `this.x` inside `foo` is `100`.
*/




let obj = {
  x: 42,

  foo() {
    console.log(this.x);
  }
}

obj.foo.bind({x:100}).bind({x:200}).call({x:300});  // Output: 100
