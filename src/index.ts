//----------
// functions
//----------

function addTwoNumbers(a:number, b:number): number {
    return a + b;
};

const substractTwoNumbers = (a: number, b: number): number => {
    return a - b;
};

addTwoNumbers(2, 4);
substractTwoNumbers(10, 7);

function addAllNumbers(items: number[]){
    const total = items.reduce((a, c) => a + c, 0);

    console.log(total);
};

addAllNumbers([5,7,9,11,3,2,1,100]);

//-----------------------
//  return type inference
//-----------------------

function formatGreeting(name: string, greeting: string): string {
    return `${greeting}, ${name}`;
}

const result = formatGreeting('mario', 'hello');