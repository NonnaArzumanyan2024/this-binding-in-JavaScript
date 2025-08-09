/* 
  This code defines an object `obj` with a method `foo` (regular function).

  When calling obj.foo(), 'this' inside foo refers to obj.
  This is called "implicit binding" — 'this' is automatically set to the object 
  before the dot when the method is invoked.

  The console logs the entire obj object.
*/




let obj = {
  foo: function() {
    console.log(this);
  }
}

obj.foo(); // Output: { foo: [Function: foo] }
