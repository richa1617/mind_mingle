import { animals } from "../../data/animalData";
import { useRouter } from "next/router";
import Link from "next/link";

function animal_id() {
  const router = useRouter();
  const id = Number(router.query.id);

  const animal_with_id = animals.find((e) => e.id === id);

  if (!animal_with_id) {
    return "No id";
  }

  return (
    <>
      <Link className="back-button" href="/">
        👈 Back
      </Link>
      <div>
        <h1>{animal_with_id.name}</h1>
        <p>{animal_with_id.kind}</p>
        <p>{animal_with_id.age}</p>
      </div>
    </>
  );
}

export default animal_id;
