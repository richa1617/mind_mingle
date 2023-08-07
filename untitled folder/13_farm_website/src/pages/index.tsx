import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "@/pages/types/types";
import Link from "next/link";

export default function Home() {
  const [animalData, setAnimalData] = useState<Animal[] | null>(null);
  const [categoryAnimal, setCategoryAnimal] = useState<Animal[] | null>(null);

  useEffect(() => {
    async function fetchAnimalData() {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );

      setAnimalData(response.data);
    }

    fetchAnimalData();
  }, []);

  if (!animalData) {
    return <p>Loading</p>;
  }

  let categoryArray = animalData.map((animal) => animal.kind);
  let uniqueCategory = Array.from(new Set(categoryArray));

  function handleClickPig() {
    if (!animalData) {
      return;
    }

    let pigAnimal = animalData.filter((animal) => {
      return animal.kind === "pig";
    });

    setCategoryAnimal(pigAnimal);
  }

  function handleClickCow() {
    setAnimalData(animalData);
    if (!animalData) {
      return;
    }

    let cow = animalData.filter((animal) => {
      return animal.kind === "cow";
    });

    setCategoryAnimal(cow);
  }

  return (
    <>
      <h1>Welcome to my farm</h1>
      {/* {uniqueCategory.map((category) => {
        return (
          <div>
            <Link href={`${category}`}>{category}</Link>
          </div>
        );
      })} */}
      <div>
        {animalData.map((e) => {
          return <h4>{e.name}</h4>;
        })}
      </div>
      <button onClick={handleClickPig}>Pig</button>
      <button onClick={handleClickCow}>Cow</button>
      {/* <button onClick={handleClick}>Sheep</button>
      <button onClick={handleClick}>Chicken</button> */}
      <button>All</button>
      {categoryAnimal?.map((e) => {
        return <h1>{e.name}</h1>;
      })}
    </>
  );
}
