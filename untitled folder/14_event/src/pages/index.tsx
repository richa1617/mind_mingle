import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "@/pages/types/types";

export default function Home() {
  const [animalData, setAnimalData] = useState<Animal[] | null>(null);

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

  function handleSort() {
    console.log("clicked");
    if (!animalData) {
      return "none";
    }
    let sorted = [...animalData].sort((a, b) => a.age - b.age);
    console.log(sorted);

    setAnimalData(sorted);
  }

  function handleFeed(animalID:number) {
    const updatedAnimalData = [...animalData];
    console.log(animalId)
  }

  return (
    <>
      <h1>Welcome to my farm</h1>
      <button onClick={handleSort}>Sort by age</button>

      <div>
        {animalData.map((animal) => {
          return (
            <div key={animal.id}>
              <h4>
                {animal.name} : {animal.age}{" "}
              </h4>

              <button onClick={() => handleFeed(animal.id)}>
                {animal.hasBeenFed ? "Feed Again" : "Feed Now"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
