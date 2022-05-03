// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'test';
age = 30;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// let ninjas = [10, 23];
// ninjas = ['alex', '23'];
ninjas.push('Giv');

// union types
let mixed: (string|number)[] = []; 
mixed.push('hello');
mixed.push(20);
console.log(mixed);

let uid: string|number;
uid = 123;
uid = 'a23';

// objects

let ninjaOne: object;
ninjaOne = {
    name: 'Alex',
    age: 30
}

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    belt: 'black'
}