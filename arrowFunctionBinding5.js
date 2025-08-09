/*
  This code defines an object `obj` with:
    - A property `bar` set to 42.
    - A method `baz` (a normal function).

  Inside `baz`:
    1. We define `qux` as an **arrow function** that logs `this.bar`.
    2. Arrow functions do not have their own `this`; instead, they **lexically inherit**
       `this` from the surrounding scope at the time they are created.
    3. Since `qux` is created inside `baz`, and `baz` is called as `obj.baz()`,
       the `this` inside `baz` refers to `obj`.
    4. Therefore, the arrow function `qux` captures that same `this` (which is `obj`).
    5. When `qux()` is executed, it uses the captured `this`, so `this.bar` → 42.

  Key points:
    - Even though `qux()` is a standalone call inside `baz`, it still uses the `this` from `baz`'s execution.
    - Arrow functions ignore `.call()`, `.apply()`, or `.bind()` for `this` changes — their `this` is fixed
      when defined.
    - This is "arrow function binding" because the `this` is determined at definition time,
      not at call time.
*/




let obj = {
    bar: 42,

    baz: function() {
        const qux = () => {
            console.log(this.bar);
        }
        qux();
    }
}

obj.baz(); // Output: 42
