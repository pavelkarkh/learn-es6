let make = 'Lada',
    model = 'Granta',
    type = 'sedan',
    slogan = 'Make America Great Again';

const superAuto = {
    make,
    model,
    type,
    slogan,
    
    saySlogan() {
        console.log(`${make} ${model} say: "${slogan}"`);
    },

    get auto() {
        return `this is ${make} ${model}`;
    },

    set slogan(value) {
        this.slogan = value;
    }
};

console.log(superAuto);
superAuto.saySlogan();
console.log(superAuto.auto);


function makeSandwitch(property, value) {
    let sandwitch = {
        [property]: value,

        ['get' + property]() {
            return this[property];
        }
    };

    return sandwitch;
}

const sandwitch = makeSandwitch('bread', 'borodinskiy');

console.log(sandwitch.getbread());

