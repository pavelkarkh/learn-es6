"use strict";

var _templateObject = _taggedTemplateLiteral(["<b>", " says</b>: \"", "\""], ["<b>", " says</b>: \"", "\""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// 1
var arr = [32, 24, 89, 44, 55];
console.log("in array [" + arr + "] min value = " + Math.min.apply(Math, arr));

// 2
function helloReverse(name) {
  console.log("Hello " + name);
  console.log("Yors name reverse \"" + name.split("").reverse().join("") + "\"");
}
helloReverse('Ivan');

// 3
var comments = [["Muad'Dib", "The power to destroy a thing is the absolute control over it."], ["Edd Dumbill", "HTML isn't a very good language for making Web pages. However, it has been a very good language for making the Web."], ["Ian Hickson", "Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day."], ["l33t haxor", "<script>alert(\"pwned!\")</script>"], ["jsninja", "It's kind of hard to find quotes with &s in them!"]];
function html(string) {
  var newString = '';

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (part, index) {
    return newString += string[index] + part.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  });
  newString += string[string.length - 1];
  //mystring.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  return newString;
}
comments.forEach(function (comment) {
  return console.log(html(_templateObject, comment[0], comment[1]));
});