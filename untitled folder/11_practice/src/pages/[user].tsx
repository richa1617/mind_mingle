import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function UserDetails() {
  const router = useRouter();
  const idFromUrl = Number(router.query.user);
  if (isNaN(idFromUrl)) {
    return <h1>No valid ID in URL! 🐸</h1>;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUserDetails() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${idFromUrl}`
      );

      setUser(response.data);
    }

    fetchUserDetails();
  }, [idFromUrl]);

  if (!user) {
    return "No user";
  }
  return (
    <div>
      <p>{user.title}</p>
    </div>
  );
}

export default UserDetails;
