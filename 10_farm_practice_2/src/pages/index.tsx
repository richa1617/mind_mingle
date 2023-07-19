import Head from "next/head";
import animalsJson from "../data/animals.json";
import { Animal, Emoji } from "../types/types";

import Link from "next/link";

export default function Home() {
  let animals = animalsJson as Animal[];

  let animal_category = animals.map((e) => e.kind);
  let unique_category = Array.from(new Set(animal_category)); //["cow","chicken","sheep","pig"]

  let unique_string = unique_category.join(",");

  let emoji: Emoji = { cow: "🐮", chicken: "🐔", pig: "🐷", sheep: "🐑" };

  return (
    <>
      <Head>
        <title>My Farm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>Welcome to farm</div>
      <p>We have diferrent kinds of animals {unique_string}</p>
      <h3>To know more above specific category</h3>

      {unique_category.map((e) => {
        return (
          <>
            <Link href={`${e}`}>
              <button>{e}</button>
              <br></br>
              <br></br>
            </Link>
          </>
        );
      })}
    </>
  );
}
