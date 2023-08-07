import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Animal } from "./types/types";
import axios from "axios";

function animalDetail() {
  const router = useRouter();
  const idFromUrl = Number(router.query.id);

  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    async function fetchAnimalWithId() {
      let response = await axios.get(
        `https://reader.mindmingle.nl/api/exercises/react/animals/${idFromUrl}`
      );

      setAnimal(response.data);
    }

    fetchAnimalWithId();
  }, []);

  if (!animal) {
    return "No animal";
  }

  return (
    <>
      <h2> {animal.name}</h2>
      <p>{animal.kind}</p>
    </>
  );
}

export default animalDetail;
