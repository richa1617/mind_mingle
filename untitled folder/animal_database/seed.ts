import animal from "./prisma/data/animal.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < animal.length; i++) {
    await prisma.animal.create({
      data: animal[i],
    });
  }
};

seed();
