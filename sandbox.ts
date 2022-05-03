let character = 'Alex';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(17))

// Arrays
let names = ['Giv', 'Alex', 'Freddie'];

names.push('Brian');
// names.push(20);

let numbers = [10, 20, 30];
numbers.push(25);
// numbers.push('test');

let mixed = ['John', 29, 'Roger', 50];
mixed.push(60);
mixed.push('bill');

// Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40;
ninja.name = 'yoshi';
// ninja.age = 'ten';