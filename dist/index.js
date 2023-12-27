"use strict";
//---------
// any type
//---------
let age;
let title;
age = 30;
age = false;
title = 25;
title = {
    hello: 'world'
};
//-------------------
// any type in arrays
//-------------------
let things = ['hello', 25, true, null, undefined];
things.push({ id: 123 });
//----------------
// functions & any
//----------------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(3);
// useful when migratins from JS to TS
// because using any won't cause errors initially
