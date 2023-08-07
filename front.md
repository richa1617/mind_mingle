To Install react :

npx create-next-app@latest 02-react-intro --import-alias "@/\*" --no-app --typescript --no-tailwind --eslint --src-dir

To use link in next.js :
import Link from 'next/link';

Install axios :npm i axios

Common imports:
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Fetch request in useffect
const [recipes, setRecipes] = useState<null | Recipe[]>(null);
useEffect(() => {
const fetchRecipeData = async () => {
const response = await axios.get("http://localhost:3000/recipe");
setRecipes(response.data);
};
fetchRecipeData();
}, []);

Inline buutton with
<button onClick={() => clickHandler()}>{e}</button>

//the clicked button has active class.We can use this to know which button is clciked:

const [activeButton, setActiveButton] = useState<null | string>(null);

    function clickHandler(buttonValue: any) {
    setActiveButton(buttonValue);
    console.log(activeButton);

}

<button onClick={() => clickHandler(e)}
className={activeButton === e ? "active" : ""}

>

//to pass id of element we clicked as paramter
     <button onClick={() => knowMoreHandler(recipe.id)}>Know more</button>


//to pass event object :
 <button onClick={(event) => knowMoreHandler(event)}>Know more</button>