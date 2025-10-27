import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../Pages/Recipes";
import CreateRecipes from "../pages/CreateRecipes";
import RecipeDetails from "../pages/RecipeDetails";
import Contact from "../pages/Contact";
import UpdateRecipe from "../pages/UpdateRecipe";
import PageNotFound from "../pages/PageNotFound";
import Favorite from "../pages/Favorite"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<RecipeDetails />} />
      <Route path="/recipes/update/:id" element={<UpdateRecipe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create-recipe" element={<CreateRecipes />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
