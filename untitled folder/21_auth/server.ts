import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";
import { toToken, toData } from "./prisma/auth/jwt";
import { AuthMiddleware } from "./prisma/auth/middleware";

const app = express();
const prisma = new PrismaClient();
const port = 3001;
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//REGISTER A USER

app.post("/register", async (req, res) => {
  const requestBody = req.body;

  if (
    "name" in requestBody &&
    "email" in requestBody &&
    "password" in requestBody
  ) {
    try {
      await prisma.user.create({
        data: requestBody,
      });
      res.status(201).send({ message: "User created!" });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res.status(400).send("missing");
  }
});

app.post("/login", async (req, res) => {
  const requestBody = req.body;

  //First check if user user exist by checking email and password in databse
  if ("email" in requestBody && "password" in requestBody) {
    const userToLogin = await prisma.user.findUnique({
      where: {
        email: requestBody.email,
      },
    });

    //Generate token  for that specific user(so we use id --unique)
    if (userToLogin && userToLogin.password === requestBody.password) {
      const token = toToken({ userId: userToLogin.id });
      res.status(200).send({ token: token });
      return;
    }
    res.status(400).send({ message: "Login failed" });

    res.status(400).send({ message: "Login failed" });
  } else {
    //Missing feilds
    res
      .status(400)
      .send({ message: "'username' and 'password' are required!" });
  }
});

// app.get("/users", async (req, res) => {
//   // Get the headers
//   const headers = req.headers;
//   // Check if the authorization key is in the headers and if the token is provided correctly
//   if (
//     headers["authorization"] && // Is the header there
//     headers["authorization"].split(" ")[0] === "Bearer" && // Is the first word (before the space) equal to "Bearer"
//     headers["authorization"].split(" ")[1] // Is there a part after the space
//   ) {
//     // get the token
//     const token = headers["authorization"].split(" ")[1];
//     try {
//       // Verify the token, this will throw an error if it isn't
//       const data = toData(token);
//       // If we reach this point the token was correct!
//     } catch (e) {
//       res.status(401).send({ message: "Token missing or invalid" });
//       return;
//     }
//   } else {
//     res.status(401).send({ message: "Token missing or invalid" });
//     return;
//   }

//   const allUsers = await prisma.user.findMany();
//   res.send(allUsers);
// });

app.get("/users", AuthMiddleware, async (req, res) => {
  const userData = res.locals.userData;
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
