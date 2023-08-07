/*Exercise :
We will give you the first type, the root interface that defines a Farm. Notice how we refer to different types Animal & FarmBuilding here, it is up to you to implement them.

interface Farm {
  animals: Animal[];
  buildings: FarmBuilding[];
  farmName: string;
}
📝 Exercise: Define the Animal and FarmBuilding types. You can be creative but make sure that:

Animal has a property named kind (string) and id (number)
FarmBuilding has a property shelters that hold an array of strings that determine what kind of animal can go in it.
After we created our types, let's use them to create a farm

📝 Exercise: Use the types you just created to create a variable of type Farm. It should have 5 animals and 3 building minimum.

Now we will write some functions to manage the farm

📝 Exercise: Create the following functions to manage the farm".

A function to removeAnimal that removes an animal from the farm based on id
A function to addAnimal that adds an animal to the farm
A function to checkShelters that returns a boolean indicating if all the kinds of animals have shelter

*/

interface Farm {
  animals: Animal[];
  buildings: FarmBuilding[];
  farmName: string;
}
type AnimalKind = "dog" | "cat" | "rabbit";

interface FarmBuilding {
  name: string;
  shelters: AnimalKind[];
}

interface Animal {
  id: number;
  kind: AnimalKind;
}

interface Farm {
  animals: Animal[];
  buildings: FarmBuilding[];
  farmName: string;
}

let myFarm: Farm = {
  animals: [
    { kind: "dog", id: 1 },
    { kind: "cat", id: 2 },
    { kind: "rabbit", id: 3 },
    { kind: "cat", id: 4 },
    { kind: "dog", id: 5 },
  ],
  buildings: [
    {
      name: "The Barn",
      shelters: ["dog", "rabbit"],
    },
    {
      name: "The Dog house",
      shelters: ["dog"],
    },
    {
      name: "Old village",
      shelters: ["dog"],
    },
  ],
  farmName: "cloud",
};

function removeAnimal(id: number, farm: Farm): Farm {
  for (let i = 0; i < farm.animals.length - 1; i++) {
    if (id === farm.animals[i].id) {
      farm.animals.splice(i, 1);
    }
  }
  return farm;
}

//console.log(2, myFarm);

function addAnimal(animal: Animal) {
  myFarm.animals.push(animal);
}

function checkShelters(farm: Farm): boolean {
  let buildings_shelter: AnimalKind[] = [];

  for (let i = 0; i < farm.buildings.length; i++) {
    buildings_shelter = buildings_shelter.concat(farm.buildings[i].shelters);
  }

  for (let i = 0; i < farm.animals.length; i++) {
    if (!buildings_shelter.includes(farm.animals[i].kind)) {
      return false;
    }
  }

  return true;
}

console.log(checkShelters(myFarm));
