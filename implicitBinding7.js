/*
  This code defines a class `A` with two instance fields:
    - `x` initialized to 42
    - `y` initialized to `this.x`

  When a new instance `obj` is created:
    1. The fields are initialized in the order they appear in the class.
    2. `x` is set to 42 first.
    3. Then `y` is set to `this.x`, which now has the value 42.

  Therefore, after construction:
    - `obj.x` is 42
    - `obj.y` is 42

  The console will print:
  A { x: 42, y: 42 }
*/




class A {
  x = 42;
  y = this.x;
}

let obj = new A();
console.log(obj);  // Output: A { x: 42, y: 42 }
