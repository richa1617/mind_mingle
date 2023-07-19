import animalsJson from "../../data/animals.json";
import { Animal, Emoji } from "../../types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function animal() {
  let animals = animalsJson as Animal[];

  let router = useRouter();
  let animalFromUrl = router.query.animal;

  const [animal, setAnimal] = useState<null | Animal>(null);

  useEffect(() => {
    const foundAnimal = animals.find((e) => e.name === animalFromUrl);
    if (foundAnimal) {
      setAnimal(foundAnimal);
    }
  }, [animalFromUrl]);

  function handleclickFed() {
    if (!animal) {
      return null;
    }
    return setAnimal({ ...animal, hasBeenFed: true });
  }

  if (!animal) {
    return <h1>Not found</h1>;
  }

  return (
    <div key={animal.id}>
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
      <p>{animal.hasBeenFed ? "I am full" : "I am hungry"}</p>
      <p>
        {!animal.hasBeenFed && (
          <button onClick={handleclickFed}>Feed me</button>
        )}
      </p>
    </div>
  );
}

export default animal;
