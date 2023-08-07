"use strict";
const people = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Mary", age: 25 },
    { id: 3, name: "Bob", age: 40 },
    { id: 4, name: "Alice", age: 20 },
    { id: 5, name: "Mark", age: 50 },
    { id: 6, name: "Julia", age: 27 },
];
const animals = [
    { id: 1, name: "Bessie", kind: "cow", age: 4, hasBeenFed: false },
    { id: 2, name: "Dolly", kind: "sheep", age: 2, hasBeenFed: true },
    { id: 3, name: "Cluck", kind: "chicken", age: 1, hasBeenFed: true },
    { id: 4, name: "Porky", kind: "pig", age: 3, hasBeenFed: false },
    { id: 5, name: "Maggie", kind: "cow", age: 5, hasBeenFed: true },
    { id: 6, name: "Bo", kind: "sheep", age: 1, hasBeenFed: false },
    { id: 7, name: "Nugget", kind: "chicken", age: 2, hasBeenFed: false },
    { id: 8, name: "Wilbur", kind: "pig", age: 2, hasBeenFed: true },
    { id: 9, name: "Bella", kind: "cow", age: 7, hasBeenFed: true },
    { id: 10, name: "Fluffy", kind: "sheep", age: 3, hasBeenFed: true },
    { id: 11, name: "Wings", kind: "chicken", age: 1, hasBeenFed: false },
    { id: 12, name: "Babe", kind: "pig", age: 1, hasBeenFed: true },
    { id: 13, name: "Moo", kind: "cow", age: 3, hasBeenFed: false },
    { id: 14, name: "Fleece", kind: "sheep", age: 4, hasBeenFed: false },
    { id: 15, name: "Feathers", kind: "chicken", age: 2, hasBeenFed: true },
    { id: 16, name: "Piglet", kind: "pig", age: 4, hasBeenFed: true },
];
const farms = [
    {
        id: 1,
        name: "Old McDonald's Farm",
        farmer: 1,
        animals: [1, 2, 3, 4, 9, 10],
    },
    {
        id: 2,
        name: "Green Acres Farm",
        farmer: 2,
        animals: [5, 6, 7, 8, 12, 14],
    },
    {
        id: 3,
        name: "Happy Farm",
        farmer: 3,
        animals: [11, 13],
    },
    {
        id: 4,
        name: "Julia's Farm",
        farmer: 6,
        animals: [15, 16],
    },
];
//Show the name of every person in people
let personName = people.map((e) => {
    return e.name;
});
//console.log(personName);
//For every animal in animals create a string that tells their age. So for the first animal, it should be "Bessie is 4 years old"
let str = animals.map((e) => {
    return `${e.name} is ${e.age} years old`;
});
//console.log(str);
//Show the length of every farm name in `farms
let length2 = farms.map((e) => {
    return e.name.length;
});
//console.log(length2);
