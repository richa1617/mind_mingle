import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "@/pages/types/types";

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

  function handleClick(event) {
    event.preventDefault();
    let category = event.target.innerText.toLowerCase();
    console.log(category); //This console logs the button
    if (!animalData) {
      return;
    }
    const filteredAnimals = animalData.filter(
      (animal) => animal.kind === category
    );
    console.log(filteredAnimals);
    setCategoryAnimal(filteredAnimals);
  }

  function handleSort() {
    console.log("clciekd");
    if (!animalData) {
      return "none";
    }

    let sorted = [...animalData];

    sorted = animalData.sort((a, b) => a.age - b.age);
    console.log(sorted);

    setAnimalData(sorted);
  }

  return (
    <>
      <h1>Welcome to my farm</h1>
      <button onClick={handleSort}>Sort by age</button>

      <div>
        {animalData.map((e) => {
          return (
            <>
              <h4>
                {e.name} {e.age}
              </h4>
            </>
          );
        })}
      </div>

      {uniqueCategory.map((category) => {
        return (
          <>
            <button onClick={(event) => handleClick(event)}>{category}</button>
          </>
        );
      })}

      {/* <button onClick={(event) => handleClick(event)}>Pig</button>
      <button onClick={(event) => handleClick(event)}>Cow</button>
      <button onClick={(event) => handleClick(event)}>Sheep</button>
      <button onClick={(event) => handleClick(event)}>Chicken</button> */}

      {categoryAnimal?.map((animal) => {
        return (
          <>
            <ul>
              <li>{animal.name}</li>
            </ul>
          </>
        );
      })}
    </>
  );
}
