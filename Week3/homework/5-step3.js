"use strict";

// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
    var product = 1;

    //This outputs each sub-element in arr one at a time. 
    //Note that for the inner loop, we are checking the .length of arr[i], 
    //since arr[i] is itself an array.

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }

    }
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));