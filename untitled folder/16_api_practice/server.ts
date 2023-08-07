import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";

const app = express();
const prisma = new PrismaClient();
app.use(json());
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//get all student

app.get("/students", async (req, res) => {
  const allStdents = await prisma.student.findMany();
  res.send(allStdents);
});

//get a student
app.get("/students/:id", async (req, res) => {
  const idFromReq = Number(req.params.id);

  const aStudent = await prisma.student.findUnique({
    where: {
      id: idFromReq,
    },
  });

  if (!aStudent) {
    res.status(404).send({
      message: "User with that id not found",
    });
    return; // use an empty return here
  }

  res.send(aStudent);
});

//create a student
app.post("/students", async (req, res) => {
  const reqBody = req.body;

  if ("username" in reqBody && "email" in reqBody) {
    await prisma.student.create({
      data: reqBody,
    });
    res.status(201).send({ message: "User created!" });
  } else {
    res.status(400).send({ message: "info missing" });
  }
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});

//update a student

app.patch("/students/:id", async (req, res) => {
  const idFromReq = Number(req.params.id);
  const requestBody = req.body;

  try {
    await prisma.student.update({
      where: {
        id: idFromReq,
      },
      data: requestBody,
    });
    res.status(201).send({ message: "User updated!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});

//Get student's enrolled courses:
app.get("/students/:id/courses", async (req, res) => {
  const idFromReq = Number(req.params.id);

  let result = await prisma.student.findUnique({
    where: {
      id: idFromReq,
    },
    include: {
      Student_Course: true,
    },
  });

  res.send(result);
});
