class Animal {
    constructor(name = 'Bobby') {
        this.name = name;
        console.log('Animal');
    }

    sound() {
        console.log('hejwehjwhejfejw');
    }

    info() {
        console.log('This is Animal');
    }
}

class Dog extends Animal {
    sound() {
        console.log('gav-gav');
    }

    info() {
        super.info();
        console.log('And this is Dog');
    }
}

let animal = new Animal('Uaghht');
let dog = new Dog('Bim');

console.log(animal);
console.log(dog);

animal.sound();
dog.sound();

animal.info();
dog.info();