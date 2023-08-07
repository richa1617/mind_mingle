import express, { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

import { json } from "express";
import { toToken, toData } from "./prisma/auth/jwt";
import { AuthMiddleware, AuthRequest } from "./prisma/auth/middleware";

const app = express();
const prisma = new PrismaClient();
const port = 4000;
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
//We create a token for user.We dont need Auth middlewear in this

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

app.get("/user/details", AuthMiddleware, async (req: AuthRequest, res) => {
  const userID = req.userId;
  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id: userID,
      },
      include: {
        product: true,
      },
    });

    res.send(userInfo);
  } catch {
    res.status(401).send({ message: "Token missing or invalid" });
    return;
  }
});

// app.post("/product/create", AuthMiddleware, async (req: AuthRequest, res) => {
//   const userID = req.userId;
//   const { category, price } = req.body;
//   try {
//     const thisUser = await prisma.user.findUnique({
//       where: {
//         id: userID,
//       },
//     });

//     if (!category && !price) {
//       res.send("Missing details");
//       return;
//     }

//     // Create the product and connect it to the user
//     const createdProduct = await prisma.product.create({
//       data: {
//         category,
//         price,
//         user: {
//           connect: {
//             id: userID,
//           },
//         },
//       },
//     });

//     res.send(createdProduct);
//   } catch (error) {
//     res.status(500).send({ message: "Failed to create product" });
//   }
// });

app.patch(
  "/product/:id/update",
  AuthMiddleware,
  async (req: AuthRequest, res) => {
    const userID = req.userId; //3
    const productID = parseInt(req.params.id); //1

    console.log(userID); //3

    if (userID && productID) {
      try {
        //Find the product
        const product = await prisma.product.findUnique({
          where: {
            id: productID,
          },
          include: {
            user: true,
          },
        });

        console.log(product);

        if (!product) {
          return res.status(404).send({ message: "Product not found" });
        }

        const userIDsAssociatedWithProduct = product?.user.map((e) => e.userId); // 3, 6
        console.log(userIDsAssociatedWithProduct);

        if (userIDsAssociatedWithProduct?.includes(userID)) {
          await prisma.product.update({
            where: {
              id: productID,
            },
            data: req.body,
          });

          res.send("Updated succesffuly");
        } else {
          res.send("Not auth");
        }

        //Check if userID in product belongs to uerID of request
      } catch {
        res.status(500).send({ message: "Failed to update product" });
      }
    }
  }
);

app.listen(port, () => {
  console.log(`⚡ Server listening on port: ${port}`);
});
