/* 
  This code defines an object `obj` with:
    - a property `bar` set to the number 42
    - a method `foo` defined as a regular function

  When calling obj.foo(), 'this' inside foo refers to obj.
  This is "implicit binding", where 'this' automatically points 
  to the object that owns the method when the method is called.

  Inside foo, we access 'this.bar', which is 42.
*/




let obj = {
  bar: 42,

  foo: function() {
    console.log(this.bar);
  }
}

obj.foo(); // Output: 42
