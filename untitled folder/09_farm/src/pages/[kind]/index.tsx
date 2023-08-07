import { useRouter } from "next/router";
import Link from "next/link";
import animals from "@/data/animals.json";

function kind() {
  const router = useRouter();
  const kind = router.query.kind;

  const animal_with_kind = animals.filter((e) => e.kind === kind);

  let emoji = { cow: "🐮", chicken: "🐔", pig: "🐷", sheep: "🐑" };

  return (
    <div>
      {animal_with_kind.map((a) => {
        return (
          <div key={a.id}>
            <li>{a.name}</li>
            <Link href={`/${kind}/${a.name}`}>
              <button>Know more</button>
            </Link>
            <p>{`I am a ${a.age} year old ${a.kind}!`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default kind;
