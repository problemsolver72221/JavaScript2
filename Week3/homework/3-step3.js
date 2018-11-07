"use strict";

//3.1 - Solution with a "for loop":

function forLoopSolution(str, num) {

  let emptyString = " ";
  let filledString = str;

  if (num < 0) {
    return emptyString;
  }

  else if (num > 0) {
    for (let i = 1; i < num; i++) {
      filledString += str
    }
  }
  return filledString;
}

console.log("Using for loop: \n" + forLoopSolution("abc \n", 4))

//3.2 - Solution with a "while loop":

function whileLoopSolution(str, num) {

  let strString = "";

  while (num > 0) {
    strString += str;
    num--;
  }

  return strString;
}

console.log("Using while loop: \n" + whileLoopSolution("abc \n", 5))

//3.3 - Solution with a "do...while loop":

function doWhileLoopSolution(str, num) {

  let strString = "";

  do {
    strString += str;
    num--;
  }
  while (num > 0);

  return strString;
}

console.log("Using do...while loop: \n" + doWhileLoopSolution("abc \n", 6))