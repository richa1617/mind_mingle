import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
interface Recipe {
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

interface Comment {
  id: number;
  name: string;
  rating: number;
  message: string;
  created_at: string;
  recipeId: number;
}

interface Category {
  id: number;
  name: string;
  emoji: string;
}

function aRecipe() {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id === undefined) {
      return;
    }

    const getRecipeFromApi = async () => {
      const recipe = await axios.get(`http://localhost:3000/recipe/${id}`);
      setRecipe(recipe.data);
      console.log(recipe.data);
    };
    getRecipeFromApi();
  }, [id]);

  if (!recipe) {
    // If recipe is still null, this means we are waiting for the request to complete (loading)
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>Hello, Recipe with ID: {id}</h1>
      <p>{recipe.name}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default aRecipe;
