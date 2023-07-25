import owner from "./data/owner.json";
import pet from "./data/pet.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  for (let i = 0; i < owner.length; i++) {
    await prisma.owner.create({
      data: owner[i],
    });
  }

  for (let i = 0; i < pet.length; i++) {
    await prisma.pet.create({
      data: pet[i],
    });
  }
};

seed();
