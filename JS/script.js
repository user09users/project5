/* 
const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

const add1 = x => x + 1;
const multiply2 = x => x * 2;

const f = compose(multiply2, add1);
console.log(f(3)); // (3 + 1) * 2 = 8
 */

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));



const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const f = composeWithArgs(multiply, add);
console.log(f(2, 3)); // (2 + 3) * 2 = 10