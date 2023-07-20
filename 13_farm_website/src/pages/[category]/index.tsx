import { useState, useEffect } from "react";
import axios from "axios";
import { Animal } from "@/pages/types/types";
import Link from "next/link";
import { useRouter } from "next/router";

function category() {
  const router = useRouter();
  const categoryFromUrl = router.query.category;

  const [categoryAnimal, setCateogryAnimal] = useState<Animal[] | null>(null);

  useEffect(() => {
    async function fetchAnimalData() {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );

      setCateogryAnimal(response.data);
    }

    fetchAnimalData();
  }, []);

  if (!categoryAnimal) {
    return "No animal in that category";
  }

  let categoryAnimalArray = categoryAnimal.filter((animal) => {
    return animal.kind === categoryFromUrl;
  });

  return (
    <div>
      <h1>{categoryFromUrl} animal list</h1>
      {categoryAnimalArray.map((e) => {
        return (
          <div>
            <Link href={`/${e.kind}/${e.id}`}>{e.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default category;
