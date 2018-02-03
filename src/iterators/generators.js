function* generate() {
    console.log('Start');
    yield 1;
    yield 2;
    yield* [3, 4];
    console.log('Finish');
}

let iterator = generate();
console.log(iterator.next());
console.log('some comand');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());