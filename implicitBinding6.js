/*
  This code defines an object `obj` with:
    - a property `bar` set to 42
    - a nested object `child` with:
        - a property `bar` set to 100
        - a method `foo` that logs `this.bar`

  When calling `obj.child.foo()`:
    - `this` inside `foo` refers to `obj.child` because the method is called on `child` (implicit binding).
    - Therefore, `this.bar` equals 100.

  The console will print: 100
*/




let obj = {
  bar: 42,

  child: {
    bar: 100,

    foo: function() {
      console.log(this.bar);
    }
  }
}

obj.child.foo();  // Output: 100
