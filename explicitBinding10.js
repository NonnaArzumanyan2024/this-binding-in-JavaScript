/*
  This code defines a function `foo` with five parameters `a, b, c, d, e`.
  The function logs `this.x` followed by the values of the parameters.

  Then:
    - `foo.bind({x:10}, 1, 2, 3)` creates a new function `func` with:
        - `this` permanently bound to `{x:10}`
        - The first three arguments (`a=1, b=2, c=3`) pre-set (partial application)
    - When `func(1, 2, 3, 4, 5)` is called:
        - The first three arguments are already bound to 1, 2, 3
        - The remaining arguments (`d` and `e`) come from the call: `4` and `5`

  So the parameters inside `foo` receive:
    a = 1 (bound)
    b = 2 (bound)
    c = 3 (bound)
    d = 4 (from call)
    e = 5 (from call)

  The console will print:
    10 1 2 3 4 5

 "Explicit binding" using `.bind()` sets `this` permanently.
*/




function foo(a, b, c, d, e) {
  console.log(this.x, a, b, c, d, e);
}

const func = foo.bind({x:10}, 1, 2, 3);
func(1, 2, 3, 4, 5); // Output: 10 1 2 3 4 5
