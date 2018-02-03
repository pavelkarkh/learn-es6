let add = (a, b) => a + b;
console.log(add(2, 2));

(() => console.log('IIFE'))();

let human = {
    age: 22,
    height: 186,

    getAge: () => {
        console.log('Age this human ' + this.age);
        console.log(this);
    }
}
human.getAge();