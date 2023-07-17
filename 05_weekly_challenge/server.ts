import express from "express";

const app = express();

const port = 3001;

app.get("/hello", (req, res) => {
  res.send("Hello from Server!");
});

// Bonus Feature 2 - Sandwich Server
// Add a new route to your express server on GET /cheese that responds with a JSON array containing all the sandwiches that have cheese. You will need to copy the sandwich data file in your server!

interface Menu {
  name: string;
  ingredients: string[];
  caloricCount: number;
  vegetarian: boolean;
  spiceLevel: spiceLevel;
}

type spiceLevel = "Mild" | "Medium" | "Spicy";

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

let cheeseSandwhich: Menu[] = menu.filter((e: Menu) => {
  let ingredients_array = e.ingredients;
  let new_list = [];
  for (let i = 0; i < ingredients_array.length; i++) {
    let current_word = ingredients_array[i];
    let indi = current_word.split(" ");
    new_list.push(indi);
  }

  let final_ingredients = new_list.flat();

  return final_ingredients.includes("Cheese");
});

//console.log(cheeseSandwhich);

app.get("/cheese", (req, res) => {
  res.send(cheeseSandwhich);
});

app.listen(port, () => console.log(`⚡ Listening on port: ${port}`));
