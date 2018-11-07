'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const numberArray = [1, 1, 2, 5, 5, 5, 6, 3, 9];
const mixedArray = [1, true, "coffee", { 2: 1, 4: 2 }, false, true, "water"];

function smartSorting(anyArray) {

    anyArray.sort();
    let sortedArray = [];

    for (let i = anyArray.length - 1; i >= 0; i--) {
        if (anyArray[i] != anyArray[i - 1]) {
            sortedArray.push(anyArray[i]);
        };
        if (typeof anyArray[i] != "string" && typeof anyArray[i] != "number") {
            return "Sorry, I have to stop. I only want numbers or strings. Bye!";
        }

    }
    return sortedArray.sort();
}

const uniqueValues = smartSorting(values);
const uniqueNumbers = smartSorting(numberArray);
const mixedTest = smartSorting(mixedArray);


console.log("Array from assignment: " + values);
console.log("Sorted version: " + uniqueValues);

console.log("Array with numbers: " + numberArray);
console.log("Sorted version: " + uniqueNumbers);

console.log("Mixed array with different data types: " + mixedArray);
console.log("It doesn't accept any non-number & string values:\n" + mixedTest);