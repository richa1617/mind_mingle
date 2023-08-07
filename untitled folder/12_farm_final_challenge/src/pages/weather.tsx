import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Weather } from "@/pages/types/types";
import axios from "axios";
import Link from "next/link";

function weather() {
  const [weather, setWeather] = useState<Weather[] | null>(null);
  useEffect(() => {
    async function fetchWeather() {
      const response = await axios.get(
        " https://reader.mindmingle.nl/api/exercises/react/weather"
      );

      setWeather(response.data);
    }

    fetchWeather();
  });

  if (!weather) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      {weather.map((weather) => {
        return (
          <div>
            <h6>{weather.title}</h6>
            <p>{weather.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default weather;
