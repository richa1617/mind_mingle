import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  emoji: string;
}

interface Comment {
  id: number;
  name: string;
  rating: number;
  message: string;
  created_at: Date;
  recipeId: number;
}

export interface Recipe {
  id: number;
  name: string;
  img_url: string;
  instructions: string;
  ingredients: string;
  prep_time: number;
  serves: number;
  userId: number;
  category: Category[];
  comment: Comment[];
}

function recipe() {
  const [recipes, setRecipes] = useState<null | Recipe[]>(null);
  const [activeButton, setActiveButton] = useState<null | string>(null); //
  useEffect(() => {
    const fetchRecipeData = async () => {
      const response = await axios.get("http://localhost:3000/recipe");
      setRecipes(response.data);

      //console.log(response.data);
    };
    fetchRecipeData();
  }, []);

  const router = useRouter();
  if (recipes === null) {
    return <p>Loading</p>;
  }

  let categoryArray = recipes.map((e) => {
    let category = e.category.map((e) => e.name);
    return category;
  });

  let uniqueCategory = Array.from(new Set(categoryArray.flat()));

  function clickHandler(buttonValue: string) {
    setActiveButton(buttonValue);
  }

  let buttonFilteredRecipes: Recipe[] = recipes.filter((e) => {
    return (
      activeButton != null &&
      e.category.map((c) => c.name).includes(activeButton)
    );
  });

  if (activeButton === null) {
    buttonFilteredRecipes = recipes;
  }

  function allHandler() {
    setActiveButton(null);
  }

  function knowMoreHandler(id: Number) {
    router.push(`/recipe/${id}`);
  }

  return (
    <div>
      <>
        {uniqueCategory.map((e) => {
          return (
            <div key={e}>
              <button
                onClick={() => clickHandler(e)}
                className={activeButton === e ? "active-button" : ""}
              >
                {e}
              </button>
            </div>
          );
        })}

        {/* all button */}
        <button onClick={allHandler}>All</button>

        {/* filering unique category recipes */}
        {buttonFilteredRecipes.map((e) => {
          return (
            <div key={e.id}>
              <h4>{e.name}</h4>
              <p>{e.instructions}</p>
              <button onClick={() => knowMoreHandler(e.id)}>Know more</button>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default recipe;
