'use strict';

var add = function add(a, b) {
    return a + b;
};
console.log(add(2, 2));

(function () {
    return console.log('IIFE');
})();

var human = {
    age: 22,
    height: 186,

    getAge: function getAge() {
        console.log('Age this human ' + undefined.age);
        console.log(undefined);
    }
};
human.getAge();