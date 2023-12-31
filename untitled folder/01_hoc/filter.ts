interface Person {
  id: number;
  name: string;
  age: number;
}

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";

interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}

interface Farm {
  id: number;
  name: string;
  farmer: number; // a single id, pointing to a Person
  animals: number[]; // an array of ids, pointing to Animals
}

const people: Person[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Mary", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Mark", age: 50 },
  { id: 6, name: "Julia", age: 27 },
];

const animals: Animal[] = [
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

const farms: Farm[] = [
  {
    id: 1,
    name: "Old McDonald's Farm",
    farmer: 1, // John
    animals: [1, 2, 3, 4, 9, 10],
  },
  {
    id: 2,
    name: "Green Acres Farm",
    farmer: 2, // Mary
    animals: [5, 6, 7, 8, 12, 14],
  },
  {
    id: 3,
    name: "Happy Farm",
    farmer: 3, // Bob
    animals: [11, 13],
  },
  {
    id: 4,
    name: "Julia's Farm",
    farmer: 6, // Julia,
    animals: [15, 16],
  },
];

//Which animals in animals are sheep?

let sheepAnimals = animals.filter((e) => {
  return e.kind === "sheep";
});

//console.log(sheepAnimals)

//Which farms in `farms have less than 3 animals?

let farmWithLessThan3 = farms.filter((e) => {
  return e.animals.length < 3;
});
//console.log(farmWithLessThan3);

//Which animals in animals have a name shorter then 4 characters?

let animalsWithShortName = animals.filter((e) => {
  return e.name.length < 4;
});

console.log(animalsWithShortName);
