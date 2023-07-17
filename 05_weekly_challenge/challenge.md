# 🥪 Week 1 - Groundwork Challenge

(This is a markdown `.MD` file. If you are reading this in VSCode, right-click the file and select `Open Preview`)

## 📃 Challenge Rules

- You may refer to the Reader, previous exercises, and search the internet.
  - **If you copy and paste code from the internet, please include the source URL in a comment.**
- You can not seek assistance from other individuals.
- This challenge can not be shared with anyone.
- The challenge can only be done on-site.
- The challenge must be submitted before the deadline, failing to do so will result in a failing grade.
- The results of this challenge will be shared as soon as the teachers have completed the grading.
- If you feel like your challenge has been graded incorrectly or unfairly, contact a teacher to talk about it.

## 🎓 Challenge grading

Every challenge has **required features** and **bonus features**. Depending on which you finish you will get one of the following grades:

- ❌ **No stars**: Failing grade, not all required features completed.
- 🌟 **One star**: _Passing grade_, all required features completed.
- 🌟🌟 **Two stars**: _Good grade_, all required features and _one_ bonus feature completed.
- 🚀 **Rocket**: _Honor grade_, all required features and all bonus features completed.

## ⏱️ Challenge Duration

This challenge **starts at 10:00** and has to be **submitted before 15:30**.

## 💡 Challenge tips

- Read the tasks well.
- Break problems down into smaller problems.
- Make a plan before starting to code.
- Don't skip lunch.
- Focus on the required parts first.

## ✉️ Submitting code

This solution to this challenge should be submitted as a secret gist, create a secret gist on [this page](https://gist.github.com/), **make sure you are logged in to GitHub**. [Here](https://youtu.be/Yd2k06_hD2s) is a video that shows you how to create a gist.

You should submit three files in your gist for this challenge:

- `index.ts`
- `server.ts`
- `client.ts`

Fill in this [form](https://forms.gle/1ZGFbz358mKAEEqM9) to submit your solution, don't forget to copy and paste the url to your gist.

## Included files

- This `challenge.md` document contains the explanation of the challenge.

## What are we building?

- We will create types for our sandwich data.
- We will do some data analysis on the sandwiches.
- We will create a server that responds to HTTP requests
- We will create a client that makes an HTTP request.

## 🌟 Required Features

### Sandwiches

#### Getting started

- Use NPM to add `typescript` and `tsx` to your folder. Later on, you will also need `axios` and `express` so you might want to install them already.
- Create a new file named `index.ts`.

#### ❗ Feature 1 - Typing the sandwiches

Here is an array containing some objects representing sandwiches. Copy and paste this array inside your `index.ts` file.

```ts
const menu = [
  {
    name: "Classic BLT",
    ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise"],
    caloricCount: 450,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Veggie Delight",
    ingredients: ["Cucumber", "Avocado", "Spinach", "Hummus"],
    caloricCount: 320,
    vegetarian: true,
    spiceLevel: "Mild"
  },
  {
    name: "Spicy Chicken",
    ingredients: [
      "Grilled Chicken",
      "Pepper Jack Cheese",
      "Lettuce",
      "Spicy Sauce"
    ],
    caloricCount: 550,
    vegetarian: false,
    spiceLevel: "Spicy"
  },
  {
    name: "Turkey Club",
    ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayonnaise"],
    caloricCount: 480,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Caprese",
    ingredients: ["Cheese", "Tomato", "Basil", "Dressing"],
    caloricCount: 320,
    vegetarian: true,
    spiceLevel: "Mild"
  },
  {
    name: "Roast Beef",
    ingredients: ["Beef", "Cheese", "Onions"],
    caloricCount: 520,
    vegetarian: false,
    spiceLevel: "Medium"
  },
  {
    name: "Chicken Caesar Wrap",
    ingredients: ["Chicken", "Lettuce", "Cheese", "Dressing", "Croutons"],
    caloricCount: 380,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Egg Salad",
    ingredients: ["Eggs", "Mayonnaise", "Celery", "Mustard"],
    caloricCount: 300,
    vegetarian: true,
    spiceLevel: "Mild"
  },
  {
    name: "Tuna Melt",
    ingredients: ["Tuna", "Cheese", "Tomato"],
    caloricCount: 480,
    vegetarian: false,
    spiceLevel: "Mild"
  },
  {
    name: "Ham and Cheese",
    ingredients: ["Ham", "Cheese"],
    caloricCount: 420,
    vegetarian: false,
    spiceLevel: "Mild"
  }
];
```

Inspect the data and create an interface for an individual sandwich. Now use that interface to type the `menu` variable.

#### ❗ Feature 2 - Limiting the options

The `spiceLevel` field in your interface should be limited to one of these options: `"Mild"`, `"Medium"` or `"Spicy"`

#### ❗ Feature 3 - Caloric counts

Create an array containing all the Caloric counts of the sandwiches.

#### ❗ Feature 4 - Vegetarian sandwiches

Create an array that only contains the **names** of all the vegetarian sandwiches.

_Tip: We only want the names in the array, not the whole object_

### Server

#### ❗ Feature 5 - Create a server

Create a new file named `server.ts`. When running the file it should start an Express server listening to HTTP request. The server needs to have one route on `GET /hello` that sends back the string `"Hello from Server!"`.

### Client

#### ❗ Feature 6 - Create a client

Create a new file named `client.ts`. When running this file it should use Axios to make an HTTP GET request to the route from feature 5. When you run the file, it should log just the message the server sends back (`"Hello from Server!"`).

_Tip: We only want to see the string `"Hello from Server!"`, not the whole response_

## 🌟🌟 Bonus Features

#### ➕ Bonus Feature 1 - Most loaded sandwich

Write code that finds the sandwich with the largest amount of ingredients. Log its **name** and the amount of **ingredients**.

#### ➕ Bonus Feature 2 - Sandwich Server

Add a new route to your express server on `GET /cheese` that responds with a JSON array containing all the sandwiches that have cheese. **You will need to copy the sandwich data file in your server!**
