import animalsJson from "../../data/animals.json";
import { Animal, Emoji } from "../../types/types";
import { useRouter } from "next/router";

function animal() {
  let animals = animalsJson as Animal[];

  let router = useRouter();
  let animal = router.query.animal;

  let a_animal = animals.find((e) => e.name === animal);

  if (!a_animal) {
    return "Not found";
  }
  return (
    <div>
      <h1>{a_animal.name}</h1>
      <p>{a_animal.description}</p>
    </div>
  );
}

export default animal;
