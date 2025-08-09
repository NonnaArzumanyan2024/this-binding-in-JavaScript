/*
  This code defines a function `createPerson` that assigns a `name` property to `this`.

  - When you call it with the `new` keyword:
      1. A new empty object is created.
      2. `this` inside `createPerson` is bound to that new object.
      3. The function body runs, setting `this.name` to the given value.
      4. The new object is returned automatically (unless you explicitly return another object).

  In this case:
    - `new createPerson("Nonna")` creates a new object.
    - `this.name = "Nonna"` sets the `name` property.
    - `p1` refers to that object.

  This is an example of "new binding".
*/




function createPerson(name) {
    this.name = name;
}

let p1 = new createPerson("Nonna");
console.log(p1); // Output: createPerson { name: "Nonna" }
