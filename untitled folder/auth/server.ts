import express from "express";
import { PrismaClient } from "@prisma/client";
import { toToken ,toData} from "./jwt";
import bodyParser from "body-parser";

const prisma = new PrismaClient();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/login", async (req, res) => {
  const requestBody = req.body;

  if ("username" in requestBody && "password" in requestBody) {
    try {
      const userToLogin = await prisma.user.findFirst({
        where: {
          username: requestBody.username,
        },
      });

      if (userToLogin && userToLogin.password === requestBody.password) {
        const token = toToken({ id: userToLogin.id });
        res.status(200).send({ token: token });
        return;
      }
      res.status(400).send({ message: "Login failed" });
    } catch {
      Error;
    }
    {
      res.status(500).send({ message: "Something went wrong!" });
    }
  } else {
    res
      .status(400)
      .send({ message: "'username' and 'password' are required!" });
  }
});





 app.get('/users', async(req,res)=>{
   const headers =req.headers
     
   if (
    headers["authorization"] &&
    headers["authorization"].split(" ")[0] === "Bearer" &&
    headers["authorization"].split(" ")[1]
  ){

    const token = headers["authorization"].split(" ")[1];
  }
  try {
    // Verify the token, this will throw an error if it isn't
    const data = toData(token);
  } catch (e) {
    res.status(401).send({ message: "Token missing or invalid" });
    return;
  } else {
  res.status(401).send({ message: "Token missing or invalid" });
  return;
}

const allUsers = await prisma.user.findMany({
  select: {
    id: true,
    username: true,
    age: true
  }
});
res.send(allUsers);

 })
app.listen(port, () => console.log(`⚡ Listening on port: ${port}`));
