//-------
// tuples
//-------

let person: [string, number, boolean] = ['Mario', 25, true];

//----------------
// tuples examples
//----------------

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 100]

let xy: [number, number]
xy = [94.2, 20.3]

function useCoords(): [number, number] {
    // get coords
    const lat = 100;
    const long = 50;

    return [lat, long];
}

const [lat, long] = useCoords();

//-------------
// named tuples
//-------------

let user: [name: string, age: number];

user = ['Peach', 25];
console.log(user[0]);