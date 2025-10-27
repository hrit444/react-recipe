import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../Context/RecipeContext";
import "../pages/Recipes.css"

const Recipes = () => {
  const { recipe } = useContext(recipeContext);
  const renderRecipes = recipe.map((recp) => (
    <RecipeCard key={recp.id} recipe={recp} />
  ));

  return (
    <div className="p-3 lg:p-[1.2vw] min-h-screen grid gap-[2vw] grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {recipe.length > 0 ? renderRecipes : (<h2 className="notfound">Create a recipe first</h2>)}
    </div>
  );
};

export default Recipes;
