import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const runQueries = async () => {
  const one = await prisma.pet.findMany({
    where: {
      kind: "Dog",
    },
    include: {
      owner: true,
    },
  });

  // console.log(one);

  const OwnerWithNoPet = await prisma.owner.findMany({
    where: {
      Pet: {
        none: {},
      },
    },
  });

  //console.log(OwnerWithNoPet);

  //Retrieve the owner with the highest age.
  const elder = await prisma.owner.aggregate({
    _max: {
      age: true,
    },
  });

  //console.log(elder)

  //Find the owner(s) with the most pets.

  const ownerWithPet = await prisma.owner.findMany({
    include: {
      Pet: true,
    },
  });

  const ownerWithHighestPet = ownerWithPet.map((e) => {
    return { ...e, numberOfpets: e.Pet.length };
  });

 // console.log(ownerWithHighestPet);

  //Retrieve the names of all pets and sort them in alphabetical order.

  const sortPet = await prisma.pet.findMany({
    select: {
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  console.log(sortPet)
};

runQueries();
