import user from "./prisma/data/user.json";


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < user.length; i++) {
    await prisma.user.create({
      data: user[i],
    });
  }

  // for (let i = 0; i < product.length; i++) {
  //   await prisma.product.create({
  //     data: product[i],
  //   });
  // }
};

seed();
