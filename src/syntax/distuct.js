let arr = [1, 2, 3, 4];
let [firs, second] = arr;

console.log(firs, second);

let [one, ...others] = arr;
console.log(one, others);

let [, two, three] = arr;
console.log(two, three);

let person = {
    firstname: 'John',
    lastname: 'Doe'
};

let { firstname, lastname } = person;
console.log(firstname, lastname);

let { lastname: prop1, firstname: prop2} = person;
console.log(prop1, prop2);

function post(url, { text, tags, createdAt }) {
    console.log(`this post with text = "${text}", will be sen in next url = "${url}"`);   
}
post('server/api/blog/post',
{
    text: 'some text in usual blog', 
    tags: ['text', 'blog', 'opinion'],
    createdAt: Date.now
});
