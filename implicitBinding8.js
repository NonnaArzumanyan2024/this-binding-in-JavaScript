/*
  This code defines a class `A` with two instance fields:
    - `y` initialized to `this.x`
    - `x` initialized to 42

  When a new instance `obj` of class `A` is created:
    1. The fields are initialized in the order they are written in the class.
    2. So `y` is assigned the value of `this.x` before `x` is assigned.
    3. At the time `y` is initialized, `this.x` is `undefined` because `x` hasn't been set yet.
    4. Then `x` is set to 42.

  Therefore, after construction:
    - `obj.y` is `undefined`
    - `obj.x` is 42

  The console.log(obj) will print something like:
  A { y: undefined, x: 42 }

  `this` binding here is "implicit" and tied to the current instance under construction.
*/




class A {
  y = this.x;
  x = 42;
}

let obj = new A();
console.log(obj);  // Output: A { y: undefined, x: 42 }
