import { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorite = () => {
  const fav = JSON.parse(localStorage.getItem("fav"))

  const renderRecipes = fav.map((recp) => (
    <RecipeCard key={recp.id} recipe={recp} />
  ));
  useEffect(() => {}, []);
  

  return (
    <div className="p-3 lg:p-[1.2vw] min-h-screen grid gap-[2vw] grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {fav.length > 0 ? renderRecipes : (<h2 className="notfound">Select a favorite first</h2>)}
    </div>
  );
}

export default Favorite