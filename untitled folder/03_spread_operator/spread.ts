const chickenNames = ["Cluck", "Nugget", "Wings"];
const aCow = { name: "Bella", kind: "Cow", hasBeenFed: false, age: 3 };

let addChickenNamesFront = ["DoDo", ...chickenNames];
console.log(addChickenNamesFront);

let addChickenNamesEnd = [...chickenNames, "Bo"];
console.log(addChickenNamesEnd);

let changedHasBeenFed = { ...aCow, hasBeenFed: true };
console.log(changedHasBeenFed);

let ageIncrease = { ...aCow, age: aCow.age + 2 };
console.log(ageIncrease);
interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";
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

let ageIncreaseAnimal = animals.map((e) => {
  if (e.age > 3) {
    return { ...e, age: e.age + 2 };
  } else {
    return e;
  }
});

console.log(ageIncreaseAnimal);
