let firstArray = ['one', 'two', 'three'];
let secondArray = ['six', 'seven', 'eight'];

let together = [...firstArray, 'four', 'five', ...secondArray];

console.log(together);

function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers));

