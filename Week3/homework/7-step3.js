'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

/*

01 - The variable here "Passed by Value", because it is a "number" data type.
Primitive data types like number, string and boolean..etc. are always pass by value.
That's why the value "x" didn't got effected by what is happening inside the function.

02 - The variable here "Passed by Reference", because it is a "object" data type.
Non-primitive data types like object, array and date are always pass by reference.
That's why the value "y" got effected by what is happening inside the function.

*/

