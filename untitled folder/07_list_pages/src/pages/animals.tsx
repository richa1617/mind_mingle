type AnimalKind = "cow" | "sheep" | "chicken" | "pig";

export interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}

export const animals: Animal[] = [
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

const spotLight = animals.find((e) => e.name === "Feathers");
function Animals() {
  return (
    <div>
      <h1>Welcome to the farm!</h1>
      <h2>
        Spotlight :
        {spotLight
          ? `Today in the spotlight: ${spotLight.name} the ${spotLight.kind}`
          : null}
      </h2>
      <ul>
        {animals
          .filter((animal) => {
            if (animal.kind === "cow") {
              return true;
            } else {
              return false;
            }
          })
          .sort((a, b) => {
            return a.age - b.age;
          })
          .map((animal) => {
            return (
              <li key={animal.id}>
                <h2>{animal.name}</h2>
                <p>{`I am a ${animal.age} year old ${animal.kind}!`}</p>
                <p>{animal.hasBeenFed ? "I am happy 😌" : "I am hungry 🥺"}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Animals;
