import user from "./data/user.json";
import product from "./data/product.json";
import user_product from "./data/user_product.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const seed = async () => {
  for (let i = 0; i < user.length; i++) {
    await prisma.user.create({
      data: user[i],
    });
  }

  for (let i = 0; i < product.length; i++) {
    await prisma.product.create({
      data: product[i],
    });
  }

  for (let i = 0; i < user_product.length; i++) {
    await prisma.userProduct.create({
      data: {
        user: { connect: { id: user_product[i].userId } },
        product: { connect: { id: user_product[i].productId } },
      },
    });
  }
};

seed();
