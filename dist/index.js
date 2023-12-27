"use strict";
//----------
// functions
//----------
function addTwoNumbers(a, b) {
    return a + b;
}
;
const substractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(2, 4);
substractTwoNumbers(10, 7);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
;
addAllNumbers([5, 7, 9, 11, 3, 2, 1, 100]);
//-----------------------
//  return type inference
//-----------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('mario', 'hello');
