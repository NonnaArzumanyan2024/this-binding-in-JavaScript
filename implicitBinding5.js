/* 
  This code tries to assign a value to 'this' inside the method foo.

  However, in JavaScript, 'this' is a special keyword that cannot be assigned to.
  It is read-only inside functions and methods.

  Trying to do `this = 42;` causes a SyntaxError: Invalid left-hand side in assignment.

  That’s because 'this' is not a variable — it's a special reference set by how the function is called.

  In this method, the binding type intended is "implicit binding", 
  where 'this' would normally refer to the object owning the method when called as `obj.foo()`.

  But since 'this' is read-only and controlled by the call context, you cannot assign to it.

  So this code will NOT run and will throw an error at parse time.
*/




let obj = {
  foo() {
    this = 42;  // SyntaxError here!
    console.log(this);
  }
}

obj.foo();

