JavaScript this Binding Examples

This repository contains small JavaScript examples demonstrating different behaviors of the this keyword and its various binding types.
Each example includes detailed comments explaining what happens with this in different contexts to help you better understand how this works in JavaScript.


📌 About this
In JavaScript, this is a special keyword whose value is determined at runtime based on how a function is called, not where it’s defined.
Its meaning changes depending on the execution context — which often causes confusion.
To master this, it’s important to understand its five main binding rules.


🔹 1. Default Binding
Definition:
When a function is called standalone (not as a method of an object, not using new, and not explicitly bound), this defaults to:
undefined in strict mode
The global object in non-strict mode (window in browsers, global in Node.js)
When it happens:
Plain function calls
Functions detached from their object and called directly
Key point:
Default binding is the fallback when no other rule applies.

function foo() {
     console.log(this);
   }
   foo(); // In strict mode: undefined; otherwise global object


🔹 2. Implicit Binding
Definition:
When a function is called as a method of an object (e.g., obj.method()), this is set to that object.
When it happens:

Object method calls
Chained calls where the last object in the chain owns the function
Key point:
this is automatically bound to the object to the left of the dot (.) at call time.

const obj = {
  x: 10,
  foo() {
    console.log(this.x);
  }
};
obj.foo(); // Logs 10 — `this` refers to `obj`



🔹 3. Explicit Binding
Definition:
You can manually set this using:
call(thisArg, ...args)
apply(thisArg, [args])
bind(thisArg, ...args)
When it happens:
Directly specifying what this should be for a function call
Key point:
Explicit binding overrides default and implicit binding — but bind is permanent, while call and apply affect only that single call.

function foo() {
  console.log(this.x);
}
const obj = { x: 20 };
foo.call(obj); // Logs 20



🔹 4. New Binding
Definition:
When a function is called with the new keyword, it becomes a constructor call:
A new empty object is created.
this is bound to that new object.
Unless the function returns its own object, the newly created one is returned.
When it happens:
Constructor functions
ES6 classes
Key point:
New binding takes precedence over implicit and default binding.

function Foo() {
  this.x = 30;
}
const instance = new Foo();
console.log(instance.x); // 30


🔹 5. Arrow Function Binding
Definition:
Arrow functions do not have their own this.
Instead, they lexically inherit this from the surrounding scope where they are defined.
When it happens:

Any arrow function, whether inside a method, a constructor, or a regular function
Key point:
You cannot change this inside an arrow function using call, apply, or bind. Its value is fixed at creation time.

const obj = {
  x: 40,
  foo: () => {
    console.log(this.x);
  }
};
obj.foo(); // `this` is inherited from outside, likely undefined or global
