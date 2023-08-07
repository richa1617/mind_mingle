import { useState, useEffect } from "react";
import axios from "axios";
interface Weather {
  date: string;
  emoji: string;
  announcement: string;
}

function practice() {
  const [animal, setAnimalNews] = useState<Weather[] | null>(null);

  useEffect(() => {
    async function fetchAnimalNews() {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/news"
      );
      console.log(response.data);
      setAnimalNews(response.data);
    }

    fetchAnimalNews();
  }, []);

  if (!animal) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {animal.map((e) => {
        return (
          <>
            <p>{e.date}</p>
          </>
        );
      })}
    </div>
  );
}

export default practice;
