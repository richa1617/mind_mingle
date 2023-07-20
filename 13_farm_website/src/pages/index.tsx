import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "@/pages/types/types";
import Link from "next/link";

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

  let categoryArray = animalData.map((animal) => animal.kind);

  let uniqueCategory = Array.from(new Set(categoryArray));

  return (
    <>
      <h1>Welcome to my farm</h1>
      {uniqueCategory.map((category) => {
        return (
          <div>
            <Link href={`${category}`}>{category}</Link>
          </div>
        );
      })}
    </>
  );
}
