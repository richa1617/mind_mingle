import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "./../types/types";

function AnimalList() {
  const [animal, setAnimal] = useState<Animal[]>([]);

  useEffect(() => {
    async function fetchData() {
      const animals = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      console.log(animals.data);
      setAnimal(animals.data);
    }

    fetchData();
  }, []);

  return (
    <>
      {animal.map((e) => {
        return <h1 key={e.id}>{e.name}</h1>;
      })}
    </>
  );
}

export default AnimalList;
