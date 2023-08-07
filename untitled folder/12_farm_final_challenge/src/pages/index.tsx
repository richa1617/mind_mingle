import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Animal } from "./types/types";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [animalsList, setAnimalsList] = useState<Animal[] | null>(null);

  useEffect(() => {
    async function fetchAnimalData() {
      let response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );

      setAnimalsList(response.data);
    }

    fetchAnimalData();
  }, []);

  if (!animalsList) {
    return "No animal";
  }

  return (
    <>
      <h1>Welcome to my farm</h1>
      {animalsList.map((e) => {
        return (
          <>
            <Link href={`${e.id}`}>{e.name}</Link>
            <br></br>
            <br></br>
          </>
        );
      })}
      <h1>To know about weather click here</h1>
      <Link href="/weather">
        <button>Weather info</button>
      </Link>
    </>
  );
}
