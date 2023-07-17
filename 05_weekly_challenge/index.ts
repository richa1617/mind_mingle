const menu: Menu[] = [
  {
    name: "Classic BLT",
    ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise"],
    caloricCount: 450,
    vegetarian: false,
    spiceLevel: "Mild",
  },
  {
    name: "Veggie Delight",
    ingredients: ["Cucumber", "Avocado", "Spinach", "Hummus"],
    caloricCount: 320,
    vegetarian: true,
    spiceLevel: "Mild",
  },
  {
    name: "Spicy Chicken",
    ingredients: [
      "Grilled Chicken",
      "Pepper Jack Cheese",
      "Lettuce",
      "Spicy Sauce",
    ],
    caloricCount: 550,
    vegetarian: false,
    spiceLevel: "Spicy",
  },
  {
    name: "Turkey Club",
    ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayonnaise"],
    caloricCount: 480,
    vegetarian: false,
    spiceLevel: "Mild",
  },
  {
    name: "Caprese",
    ingredients: ["Cheese", "Tomato", "Basil", "Dressing"],
    caloricCount: 320,
    vegetarian: true,
    spiceLevel: "Mild",
  },
  {
    name: "Roast Beef",
    ingredients: ["Beef", "Cheese", "Onions"],
    caloricCount: 520,
    vegetarian: false,
    spiceLevel: "Medium",
  },
  {
    name: "Chicken Caesar Wrap",
    ingredients: ["Chicken", "Lettuce", "Cheese", "Dressing", "Croutons"],
    caloricCount: 380,
    vegetarian: false,
    spiceLevel: "Mild",
  },
  {
    name: "Egg Salad",
    ingredients: ["Eggs", "Mayonnaise", "Celery", "Mustard"],
    caloricCount: 300,
    vegetarian: true,
    spiceLevel: "Mild",
  },
  {
    name: "Tuna Melt",
    ingredients: ["Tuna", "Cheese", "Tomato"],
    caloricCount: 480,
    vegetarian: false,
    spiceLevel: "Mild",
  },
  {
    name: "Ham and Cheese",
    ingredients: ["Ham", "Cheese"],
    caloricCount: 420,
    vegetarian: false,
    spiceLevel: "Mild",
  },
];

// Feature 1 - Typing the sandwiches
// Inspect the data and create an interface for an individual sandwich. Now use that interface to type the menu variable.
interface Menu {
  name: string;
  ingredients: string[];
  caloricCount: number;
  vegetarian: boolean;
  spiceLevel: spiceLevel;
}

// Feature 2 - Limiting the options
// The spiceLevel field in your interface should be limited to one of these options: "Mild", "Medium" or "Spicy"
type spiceLevel = "Mild" | "Medium" | "Spicy";

// Feature 3 - Caloric counts
//Create an array containing all the Caloric counts of the sandwiches.

let caloricCount: number[] = menu.map((e: Menu) => e.caloricCount);
console.log(caloricCount);

// [
//   450, 320, 550, 480,
//   320, 520, 380, 300,
//   480, 420
// ]

// Feature 4 - Vegetarian sandwiches

// Create an array that only contains the **names** of all the vegetarian sandwiches.

let vegetarianSandwhichesName = menu
  .filter((e: Menu) => e.vegetarian)
  .map((e: Menu) => e.name);
console.log(vegetarianSandwhichesName);

//[ 'Veggie Delight', 'Caprese', 'Egg Salad' ]

// Bonus Feature 1 - Most loaded sandwich

// Write code that finds the sandwich with the largest amount of ingredients. Log its **name** and the amount of **ingredients**.

let result: number = 0;
let sandwhich_name: string = "";
for (let i = 0; i < menu.length; i++) {
  let ingredientsLength = menu[i].ingredients.length;
  if (result < ingredientsLength) {
    result = ingredientsLength;
    sandwhich_name = menu[i].name;
  }
}

console.log(
  `The name of sandwhich with highest ingredients is ${sandwhich_name}`
);

console.log(`The number of ingredients is ${result}`);
