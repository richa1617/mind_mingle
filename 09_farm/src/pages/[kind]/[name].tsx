import { useRouter } from "next/router";
import Link from "next/link";
import animals from "@/data/animals.json";

function name() {
  const router = useRouter();
  const name = router.query.name;

  const animal_with_name = animals.find((e) => e.name === name);

  if (!animal_with_name) {
    return "No animals";
  }
  return (
    <div>
      <h4>{animal_with_name.name}</h4>
      <p>{animal_with_name.description}</p>
    </div>
  );
}

export default name;
