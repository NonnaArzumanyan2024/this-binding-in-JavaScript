/*
  This code defines a function `foo` that:
    - Inside it, defines an arrow function `inner` which logs `this.x`.
    - Calls `inner.call({x:10})`.

  When calling `foo.call({x:20})`:
    - `.call({x:20})` sets `this` inside `foo` to `{x:20}`.
    - The arrow function `inner` uses **lexical `this` binding**, 
      so it does NOT get its own `this` from `.call()`.
    - Even though `inner.call({x:10})` tries to set `this` to `{x:10}`, 
      the arrow function ignores this and inherits `this` from the surrounding function `foo`.
    - Therefore, `this.x` inside `inner` is `20` (from `foo`).

  Output:
    20

Binding types involved:
Explicit binding: `.call({x:20})` sets `this` for `foo`.
Lexical binding: arrow function `inner` inherits `this` from `foo`, ignoring `.call({x:10})`.
*/




function foo() {
  const inner = () => {
    console.log(this.x);
  }
  inner.call({x:10}); // `.call()` has no effect on arrow function's `this`
}

foo.call({x:20}); // Output: 20
