'use strict';

// str восстанавливает строку
function str(strings, ...values) {
  let str = "";
  for(let i=0; i<values.length; i++) {
    str += strings[i];
    str += values[i];
  }

  // последний кусок строки
  str += strings[strings.length-1];
  return str;
}

let apples = 3;
let oranges = 5;

// Sum of 3 + 5 = 8!
console.log( str`Sum of ${apples} + ${oranges} = ${apples + oranges}!`);