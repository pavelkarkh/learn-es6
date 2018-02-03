'use strict';

// str восстанавливает строку

var _templateObject = _taggedTemplateLiteral(["Sum of ", " + ", " = ", "!"], ["Sum of ", " + ", " = ", "!"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function str(strings) {
  var str = "";

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < values.length; i++) {
    str += strings[i];
    str += values[i];
  }

  // последний кусок строки
  str += strings[strings.length - 1];
  return str;
}

var apples = 3;
var oranges = 5;

// Sum of 3 + 5 = 8!
console.log(str(_templateObject, apples, oranges, apples + oranges));