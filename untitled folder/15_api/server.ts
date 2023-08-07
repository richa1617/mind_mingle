import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";

const app = express();
const prisma = new PrismaClient();
app.use(json());

const port = 3001;

//This code sets up a route with the HTTP method GET and the path "/users". When a client sends a GET request to the "/users" path, the code inside the route handler will execute.

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      age: true,
    },
  });

  res.send(allUsers);
});

app.get("/users/:id", async (req, res) => {
  let idAsNum = Number(req.params.id);
  const aUser = await prisma.user.findUnique({
    where: {
      id: idAsNum,
    },
    select: {
      id: true,
      username: true,
      age: true,
    },
  });
  if (!aUser) {
    res.status(404).send({
      messgage: "Not found",
    });
    return;
  }
  res.send(aUser);
});

app.post("/users", async (req, res) => {
  const requestBody = req.body;

  if (
    "age" in requestBody &&
    "username" in requestBody &&
    "password" in requestBody
  ) {
    await prisma.user.create({
      data: requestBody,
    });
    res.status(201).send({ message: "User created!" });
  } else {
    res
      .status(400)
      .send({ message: "'username', 'password' and 'age' are required!" });
  }
});

app.patch("/users/:id", async (req, res) => {
  const userId = Number(req.params.id);
  const requestBody = req.body;

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: requestBody,
    });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});
app.delete("/users/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    res.status(200).send({ message: "User Deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
