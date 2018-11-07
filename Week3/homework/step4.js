'use strict';

function createBase(number1) {
    return function (number2) {
        return number1 + number2;
    };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
console.log(addSix(30)); // returns 36