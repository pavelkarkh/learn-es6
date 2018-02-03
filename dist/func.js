"use strict";

function add() {
   for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
   }

   console.log(values.reduce(function (a, b) {
      return a + b;
   }));
}

add(3);
add(4, 2);
add(5, 5, 4, 4, 2, 5);