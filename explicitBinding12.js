/*
  This code defines a function `foo` that:
    - Inside `foo`, defines an arrow function `inner` which logs `this.x`.
    - Calls `inner()` immediately.

  When calling `foo.call({x:100})`:
    - `.call()` sets `this` inside `foo` to `{x:100}`.
    - The arrow function `inner` uses **lexical `this` binding**:
      it does NOT have its own `this`, so it inherits `this` from `foo`.
    - Therefore, `inner`'s `this` is `{x:100}`.
    - `console.log(this.x)` outputs `100`.

  Output:
    100

Explicit binding: `.call({x:100})` sets `this` for `foo`.
Lexical binding: arrow function `inner` inherits `this` from `foo`.
*/




function foo() {
  const inner = () => console.log(this.x);
  inner();
}

foo.call({x:100}); // Output: 100
