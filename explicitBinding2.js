/* 
  This code defines an object `obj` with a method `fn` that logs `this.x`.

  Then, `fn` is called using `.call({x: 100})`.

  The `.call()` method explicitly sets `this` inside the function to the object passed as the first argument — here `{x: 100}`.

  Therefore, inside `fn`, `this.x` is `100`.
*/




let obj = {
  fn: function() {
    console.log(this.x);
  }
}

obj.fn.call({x: 100});  // Output: 100
