import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
const cors = require("cors");

import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { toToken } from "./auth/jwt";
import { AuthMiddleware, AuthRequest } from "./auth/middleware";

const prisma = new PrismaClient();
const port = 3000;

// Create an express app
const app = express();

// Tell the app to allow json in the request body
app.use(json());
app.use(cors());

//testing
app.get("/", async (req, res) => {
  res.send("Hello world");
});

// //get all recipe

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

//get a recipe

app.get("/recipe/:id", async (req, res) => {
  const idFromUrl = parseInt(req.params.id);

  let a_Recipe = await prisma.recipe.findUnique({
    where: {
      id: idFromUrl,
    },
    include: {
      category: true,
      comment: true,
    },
  });

  res.send(a_Recipe);
});

//login

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    res.send("Username nad password not found");
  }

  if (user && user.password === password) {
    const token = toToken({ userId: user.id });
    res.status(200).send({ token: token });
    return;
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
