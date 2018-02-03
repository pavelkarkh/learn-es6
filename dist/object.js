'use strict';

var _slogan, _superAuto, _mutatorMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

var make = 'Lada',
    model = 'Granta',
    type = 'sedan',
    slogan = 'Make America Great Again';

var superAuto = (_superAuto = {
    make: make,
    model: model,
    type: type,
    slogan: slogan,

    saySlogan: function saySlogan() {
        console.log(make + ' ' + model + ' say: "' + slogan + '"');
    },


    get auto() {
        return 'this is ' + make + ' ' + model;
    }

}, _slogan = 'slogan', _mutatorMap = {}, _mutatorMap[_slogan] = _mutatorMap[_slogan] || {}, _mutatorMap[_slogan].set = function (value) {
    this.slogan = value;
}, _defineEnumerableProperties(_superAuto, _mutatorMap), _superAuto);

console.log(superAuto);
superAuto.saySlogan();
console.log(superAuto.auto);

function makeSandwitch(property, value) {
    var _sandwitch;

    var sandwitch = (_sandwitch = {}, _defineProperty(_sandwitch, property, value), _defineProperty(_sandwitch, 'get' + property, function () {
        return this[property];
    }), _sandwitch);

    return sandwitch;
}

var sandwitch = makeSandwitch('bread', 'borodinskiy');

console.log(sandwitch.getbread());