let symbol = Symbol();
console.log(typeof symbol);

let sym1 = Symbol('name');
let sym2 = Symbol('name');

console.log(sym1, sym2);

let name = Symbol.for('name');