import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "@/pages/types/types";

import { useRouter } from "next/router";

function animalProfile() {
  const router = useRouter();
  const animalIDFromUrl = Number(router.query.animalId);

  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    if (animalIDFromUrl === undefined || isNaN(animalIDFromUrl)) {
      return;
    }
    async function fetchAnimalfromApi() {
      let response = await axios.get(
        `https://reader.mindmingle.nl/api/exercises/react/animals/${animalIDFromUrl}`
      );

      setAnimal(response.data);
    }

    fetchAnimalfromApi();
  }, [animalIDFromUrl]);

  if (!animal) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>{animal.name}</h1>
      <p>{animal.hasBeenFeb}</p>
      <p>{animal.age}</p>
      <img src={animal.imgUrl}></img>
    </div>
  );
}

export default animalProfile;
