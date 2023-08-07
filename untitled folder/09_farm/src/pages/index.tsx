import Head from "next/head";
import animalsJson from "@/data/animals.json";
import Link from "next/link";
type Kind = "cow" | "chicken" | "sheep" | "pig";

interface Animal {
  id: number;
  name: string;
  kind: Kind;
  age: number;
  hasBeenFed: boolean;
  description: string;
}

export default function Home() {
  const animals = animalsJson as Animal[];
  const farm_animals_kind = animals.map((e) => e.kind);
  const unique_animals_kind = Array.from(new Set(farm_animals_kind));

  let unique_animals_kind_string = unique_animals_kind.join(",  ");
  interface Emoji {
    cow: string;
    chicken: string;
    pig: string;
    sheep: string;
  }
  let emoji: Emoji = { cow: "🐮", chicken: "🐔", pig: "🐷", sheep: "🐑" };

  return (
    <>
      <Head>
        <title>Animal farm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome to our farm</h1>
        <p>
          Explore a diverse collection of animals including{" "}
          {unique_animals_kind_string}
        </p>
      </div>
      <div>
        <h3>Animals in different catergories</h3>
        {unique_animals_kind.map((e) => {
          return (
            <>
              <Link href={`./${e}`}>
                <button>{e}</button>
                <p>{emoji[e]}</p>
                <br></br>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
