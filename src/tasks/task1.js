// 1
let arr = [32, 24, 89, 44, 55];
console.log(`in array [${arr}] min value = ${Math.min(...arr)}`);

// 2
function helloReverse(name) {
    console.log(`Hello ${ name }`);
    console.log(`Yors name reverse "${ name.split("").reverse().join("") }"`);
}
helloReverse('Ivan');

// 3
const comments = [
    [
      "Muad'Dib",
      "The power to destroy a thing is the absolute control over it."
    ],
    [
      "Edd Dumbill",
      "HTML isn't a very good language for making Web pages. However, it has been a very good language for making the Web."
    ],
    [
      "Ian Hickson",
      "Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day."
    ],
    [
      "l33t haxor",
      "<script>alert(\"pwned!\")</script>"
    ],
    [
      "jsninja",
      "It's kind of hard to find quotes with &s in them!"
    ]
];
function html(string, ...args) {
    let newString = '';
    args.forEach(
        (part, index) => newString += string[index] + part.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
    );
    newString += string[string.length - 1];
    //mystring.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    return newString;
}
comments.forEach(comment => console.log(html`<b>${comment[0]} says</b>: "${comment[1]}"`));