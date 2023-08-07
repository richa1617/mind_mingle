import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [user, setUser] = useState<User[] | null>(null);

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setUser(response.data);
    }

    fetch();
  }, []);
  if (!user) {
    return "No user";
  }

  return (
    <>
      {user.map((e) => {
        return (
          <>
            <Link href={`${e.id}`}>{e.title}</Link>
            <br></br>
            <br></br>
          </>
        );
      })}

      <h1>HElo</h1>
    </>
  );
}
