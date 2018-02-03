'use strict';

var arr = [1, 2, 3, 4];
var firs = arr[0],
    second = arr[1];


console.log(firs, second);

var one = arr[0],
    others = arr.slice(1);

console.log(one, others);

var two = arr[1],
    three = arr[2];

console.log(two, three);

var person = {
    firstname: 'John',
    lastname: 'Doe'
};

var firstname = person.firstname,
    lastname = person.lastname;

console.log(firstname, lastname);

var prop1 = person.lastname,
    prop2 = person.firstname;

console.log(prop1, prop2);

function post(url, _ref) {
    var text = _ref.text,
        tags = _ref.tags,
        createdAt = _ref.createdAt;

    console.log('this post with text = "' + text + '", will be sen in next url = "' + url + '"');
}
post('server/api/blog/post', {
    text: 'some text in usual blog',
    tags: ['text', 'blog', 'opinion'],
    createdAt: Date.now
});