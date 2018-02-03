'use strict';

var firstArray = ['one', 'two', 'three'];
var secondArray = ['six', 'seven', 'eight'];

var together = [].concat(firstArray, ['four', 'five'], secondArray);

console.log(together);

function sum(a, b, c) {
    return a + b + c;
}

var numbers = [1, 2, 3];

console.log(sum.apply(undefined, numbers));