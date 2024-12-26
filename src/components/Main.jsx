import { useState, useRef, useEffect } from "react";
import Ingredients from "./Ingredients";
import RecipeCode from "./RecipeCode";
import IngredientsForm from "./IngredientsForm";
import { getRecipeFromMistral } from "./ai";

export default function Main(props) {
  // Declare ingredients array and function using useState
  const [ingredients, setIngredients] = useState([]);

  // Declare a reference to recipe component using useRef
  const ref = useRef(null);

  // Boolean recipeShown state representing whether
  // a recipe is back from AI Chef
  const [recipe, setRecipe] = useState("");

  // Toggle recipeShown
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  // useEffect to observe changes in recipeShown
  useEffect(() => {
    if (recipe && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [recipe, ref]);

  // Define handle function on form submit
  function handleAddIngredient(formData) {
    // Access form data using FormData
    const newIngredient = formData.get("ingredient");
    // Call useState function setIngredients to update ingredient list
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <main>
      {<IngredientsForm handleAddIngredient={handleAddIngredient} />}
      {
        <Ingredients
          recipe={recipe}
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={ref}
        />
      }
      {recipe && <RecipeCode recipe={recipe} ref={ref} />}
    </main>
  );
}
