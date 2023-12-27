//--------
// arrays
//--------

let names: string[] = ['Mario', 'Luigi', 'Peach'];
let ages: number[] = [25,28,24];

names.push('true');
ages.push(35);

//---------------------------
// type inference with arrays
//---------------------------

let fruits = ['apples', 'mangos', 'bananas', 'pears'];
fruits.push('peaches');
const f = fruits[3];

let things = [1, true, 'hello']
const t = things[0]

//-----------------
// objects literals
//-----------------

let user: {firstName: string, age: number, id: number, isFictional: boolean} = {
    firstName:'Mario',
    age: 24,
    id: 181,
    isFictional: true
};

user.firstName = 'peach';
user.id = 2;

//------------------------------------
// type inference with object literals
//------------------------------------

let person = {
    name: 'Luigi',
    score: 35
};

person.name = 'Bowser';
person.score = 24;


const score = person.score;
