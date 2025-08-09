/*
  This code defines a class `Foo` with:
    - An instance field `bar` set to 42.
    - An instance field `qux` which is an arrow function that logs `this.bar`.

  How arrow function binding works here:
    1. In JavaScript classes, instance fields (like `bar` and `qux` here) are initialized
       **on each instance** immediately after the object is created, before the constructor finishes.
    2. When `qux` is defined as an arrow function, it captures the `this` from the scope where it’s created.
       In this case, it’s created during instance initialization, so `this` refers to the new `Foo` instance.
    3. Because `this` is lexically bound at creation time, it will always refer to that same instance,
       no matter how the method is called later.
    4. Calling `obj.qux()` logs `this.bar` → 42.

  Key points:
    - Arrow functions in class fields make the `this` binding fixed to the instance.
    - `.call()`, `.apply()`, or `.bind()` cannot change the `this` inside such arrow functions.
    - This pattern is often used to avoid manually binding methods in constructors.

  This is a clear example of "arrow function binding" — the `this` is determined at creation time
  and not by how the method is invoked.
*/




class Foo {
    bar = 42;

    qux = () => {
        console.log(this.bar);
    }
}

let obj = new Foo();
obj.qux(); // Output: 42
