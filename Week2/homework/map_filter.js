'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7];

// Add your code here

//Find the odds and assign them into a variable by using filter:

const oddOnes = numbers.filter(i => i % 2 != 0)

//Double the odds and kick out the evens:

const oddDoubling = oddOnes.map(i => i * 2)

console.log("Doubled lucky odds: " + oddDoubling + "\nUnlucky kicked evens: " +oddOnes);