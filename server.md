
import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
const cors = require("cors");

// import jwt from "jsonwebtoken";
// import { JwtPayload } from "jsonwebtoken";
// import { toToken } from "./auth/jwt";
// import { AuthMiddleware, AuthRequest } from "./auth/middleware";

const prisma = new PrismaClient();
const port = 5000;

// Create an express app
const app = express();

// Tell the app to allow json in the request body
app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});

app.get("/", (req, res) => {
res.send("Hello, world!");
});


//get all recipe

app.get("/recipe", async (req, res) => {
    try {
      let allRecipe = await prisma.recipe.findMany({
        include: {
          category: true,
          comment: true,
        },
      });
  
      res.status(200).send(allRecipe);
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  });
  
  
  app.listen(port, () => {
    console.log(`⚡ Server listening on port: ${port}`);
  });
  
