import express from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "express";

const app = express();
const prisma = new PrismaClient();
const port = 3001;
app.use(json());

//get all user
app.get("/user", async (req, res) => {
  let user = await prisma.user.findMany();

  res.send(user);
});

//get a User
app.get("/user/:id", async (req, res) => {
  let idFromReq = Number(req.params.id);

  let aUser = await prisma.user.findUnique({
    where: {
      id: idFromReq,
    },
  });

  res.send(aUser);
});

// ///get a Post
// app.get("/post/:id", async (req, res) => {
//   let idFromReq = Number(req.params.id);

//   let aPost = await prisma.post.findUnique({
//     where: {
//       id: idFromReq,
//     },
//   });

//   res.send(aPost);
// });

//get all published post

app.get("/post/published", async (req, res) => {
  let allPost = await prisma.post.findMany({
    where: {
      published: true,
    },
  });

  res.send(allPost);
});

//search

app.get("/post", async (req, res) => {
  const searchString = String(req.query.searchString);

  let allPost;

  if (searchString) {
    allPost = await prisma.post.findMany({
      where: {
        published: true,
        content: {
          contains: searchString,
        },
      },
    });
  } else {
    allPost = await prisma.post.findMany({
      where: {
        published: true,
      },
    });
  }

  res.send(allPost);
});

//create a new post by user 2

app.post("/user/:id", async (req, res) => {
  let idFromReq = Number(req.params.id);
  const requestBody = req.body;

  let user = await prisma.user.findUnique({
    where: {
      id: idFromReq,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newPost = await prisma.post.create({
    data: {
      title: requestBody.title,
      content: requestBody.content,
      published: requestBody.published === "true",
      authorId: idFromReq,
    },
  });

  res.send(newPost);
});

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
