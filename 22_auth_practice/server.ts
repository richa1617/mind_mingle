import express, { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

import { json } from "express";
import { toToken, toData } from "./prisma/auth/jwt";
import { AuthMiddleware, AuthRequest } from "./prisma/auth/middleware";

const app = express();
const prisma = new PrismaClient();
const port = 3000;
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello, world ... tdjskx!");
});

//Registering a user

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send("Missing fields");
    return;
  }
  const userExistCheck = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExistCheck) {
    res.send("User email aready taken");
    return;
  }
  try {
    await prisma.user.create({
      data: req.body,
    });
    res.status(201).send({ message: "User created!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
});

//Login a user

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Missing fields");
    return;
  }

  //Find the user to login :
  try {
    const userToLogin = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userToLogin && userToLogin.password === password) {
      const token = toToken({ userId: userToLogin.id });
      res.status(200).send({ token: token });
      return;
    } else {
      res.status(400).send({ message: "Login failed" });
    }
  } catch {
    res.status(500).send({ message: "Something went wrong!" });
  }
});

// app.get("/userinfo", async (req, res) => {
//   const headers = req.headers;

//   if (
//     headers["authorization"] &&
//     headers["authorization"].split(" ")[0] === "Bearer" &&
//     headers["authorization"].split(" ")[1]
//   ) {
//     const token = headers["authorization"].split(" ")[1];
//     try {
//       const data = toData(token);
//       const userInfo = await prisma.user.findUnique({
//         where: {
//           id: data.userId,
//         },
//       });

//       res.send(userInfo);
//     } catch {
//       res.status(401).send({ message: "Token missing or invalid" });
//       return;
//     }
//   } else {
//     res.status(401).send({ message: "Token missing or invalid" });
//     return;
//   }
// });

app.patch("/user/task", AuthMiddleware, async (req: AuthRequest, res) => {
  //To  get id from token
  const userIdThaTMadeTheRequest = req.userId;

  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id: userIdThaTMadeTheRequest,
      },
      select: {
        Task: true,
      },
    });

    res.send(userInfo);
  } catch {
    res.status(401).send({ message: "Token missing or invalid" });
    return;
  }
});

// app.patch(
//   "user/task/:taskId",
//   AuthMiddleware,
//   async (req: AuthRequest, res) => {
//     const userIdThaTMadeTheRequest = req.userId;

//     try {
//       const thisTask = await prisma.task.findUnique({
//         where: { id: Number(req.params.taskId) },
//       });

//       if (!thisTask?.userId === userIdThaTMadeTheRequest) {
//         res.send("you cant do this");
//       }
//       await prisma.task.update({
//         where: {
//           id: taskId,
//         },
//         data: {
//           taskStatus: !thisTask.status,
//         },
//       });
//       res.status(201).send({ message: "User updated!" });
//     } catch {
//       res.status(401).send({ message: "Token missing or invalid" });
//       return;
//     }
//   }
// );

// app.patch("/user/task/:id", AuthMiddleware, async (req: AuthRequest, res) => {
//   const requestBody = req.body;
//   const task = parseInt(req.params.id); //4

//   const userIdThatTMadeTheRequest = req.userId;
//   const thisUser = await prisma.user.findUnique({
//     where: {
//       id: userIdThatTMadeTheRequest,
//     },
//     include: {
//       Task: true,
//     },
//   });

//   const thisTask = await prisma.task.findUnique({
//     where: { id: task },
//     select: {
//       userId: true,
//     },
//   });

//   if (thisTask?.userId === userIdThatTMadeTheRequest) {
//     await prisma.task.update({
//       where: {
//         id: thisTask?.userId,
//       },
//       data: {
//         title: requestBody.title,
//       },
//     });
//     res.status(201).send({ message: "User updated!" });
//   } else {
//     res.status(403).send("You are not authorized to update this task.");
//   }
// });

app.patch(
  "/user/taskStatus/:id",
  AuthMiddleware,
  async (req: AuthRequest, res) => {
    const requestBody = req.body;
    const task = parseInt(req.params.id); //4

    const userIdThatTMadeTheRequest = req.userId;
    const thisUser = await prisma.user.findUnique({
      where: {
        id: userIdThatTMadeTheRequest,
      },
      include: {
        Task: true,
      },
    });

    const thisTask = await prisma.task.findUnique({
      where: { id: task },
      select: {
        userId: true,
        taskStatus: true,
      },
    });

    if (thisTask?.userId === userIdThatTMadeTheRequest) {
      await prisma.task.update({
        where: {
          id: thisTask?.userId,
        },
        data: {
          taskStatus: !thisTask?.taskStatus,
        },
      });
      res.status(201).send({ message: "Toggled the status" });
    } else {
      res.status(403).send("You are not authorized to update this task.");
    }
  }
);
// delete a specific task of an authorized user
app.delete("/task/:id", AuthMiddleware, async (req: AuthRequest, res) => {
  let userID = req.userId;
  const task = parseInt(req.params.id);

  const thisUser = await prisma.user.findUnique({
    where: {
      id: userID,
    },
    include: {
      Task: true,
    },
  });

  const thisTask = await prisma.task.findUnique({
    where: { id: task },
    select: {
      userId: true,
    },
  });
  if (thisTask?.userId === userID) {
    await prisma.task.delete({
      where: {
        id: thisTask?.userId,
      },
    });
    res.status(201).send({ message: "delete!" });
  } else {
    res.status(403).send("You are not authorized to update this task.");
  }
});



app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
