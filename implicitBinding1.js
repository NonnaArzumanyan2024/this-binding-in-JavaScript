/* 
  This code defines an object `obj` with:
    - a property `bar` set to the number 42
    - a method `foo`

  When calling obj.foo(), 'this' inside foo refers to obj. 
  This is called "implicit binding", where 'this' is set automatically 
  to the object before the dot when the method is called.

  Example of implicit binding:
    obj.method()  -->  'this' inside method = obj

  The console logs the entire obj object, including the `bar` property.
*/



let obj = {
  bar: 42,

  foo() {
    console.log(this);
  }
}

obj.foo(); // Output: { bar: 42, foo: [Function: foo] }
