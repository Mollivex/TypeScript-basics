//---------
// any type
//---------

let age: any;
let title;

age = 30;
age = false;


title = 25;
title = {
    hello: 'world'
}

//-------------------
// any type in arrays
//-------------------

let things: any[] = ['hello', 25, true, null, undefined];

things.push({id:123});

//----------------
// functions & any
//----------------

function addTogether(value: any): any {
    return value + value;
}

const resultOne = addTogether('hello');
const resultTwo = addTogether(3);

// useful when migratins from JS to TS
// because using any won't cause errors initially