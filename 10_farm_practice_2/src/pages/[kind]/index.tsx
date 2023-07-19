import animalsJson from "../../data/animals.json";
import { Animal, Emoji } from "../../types/types";
import { useRouter } from "next/router";
import Link from "next/link";

function category() {
  let animals = animalsJson as Animal[];
  let router = useRouter();
  let kind = router.query.kind;

  let category = animals.filter((e) => e.kind === kind);

  return (
    <div>
      {category.map((e) => {
        return (
          <>
            <h1>{e.name}</h1>
            <Link href={`/${kind}/${e.name}`}>
              <button>Know more about me</button>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default category;
