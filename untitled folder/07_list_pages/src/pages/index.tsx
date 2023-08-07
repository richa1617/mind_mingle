import Animals from "./animals";
import AnimalList from "@/components/animalList";
import Navbar from "../components/navbar";
import { animals } from "../data/animalData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        {animals.map((e) => {
          return (
            <>
              <Link href={`/animals/${e.id}`}>{e.name}</Link>
              <br></br>
              <br></br>
            </>
          );
        })}
      </div>
    </>
  );
}
