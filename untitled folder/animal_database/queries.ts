import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const runQueries = async () => {
  //Find all the sheep

  let allSheep = await prisma.animal.findMany({
    where: {
      kind: "sheep",
    },
  });
  //console.log(allSheep);

  //Find an animal named "Bella

  const Bella = await prisma.animal.findFirst({
    where: {
      name: "Bella",
    },
  });

  //console.log(Bella);

  //Find all animals that are older than 2 years

  const olderThen2 = await prisma.animal.findMany({
    where: {
      age: {
        gt: 2,
      },
    },
    select: {
      name: true,
    },
  });

  //console.log(olderThen2);

  //Find all animals that have been fed and are younger than 3

  const result = await prisma.animal.findMany({
    where: {
      hasBeenFed: true,
      age: {
        lt: 3,
      },
    },
  });

  //console.log(result);

  //Update Fleece the Sheep so that it is one year older, happy birthday Fleece

  const updateFleece = await prisma.animal.updateMany({
    where: {
      name: "Fleece",
    },
    data: {
      age: {
        increment: 1,
      },
    },
  });
  console.log(updateFleece);

  const deleteSheep = await prisma.animal.deleteMany({
    where: {
      kind: "sheep",
    },
  });
};

runQueries(); // Run the queries
