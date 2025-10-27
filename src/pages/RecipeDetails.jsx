import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../Context/RecipeContext";
import "./RecipeDetails.css";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  // const { setRecipe } = useContext(recipeContext);

  const { recipe, setRecipe } = useContext(recipeContext);
  const params = useParams();
  const recp = recipe.find((recp) => String(recp.id) === String(params.id));
  // const recp = recipe.find((recp) => recp.id === params.id);
  const navigate = useNavigate();

  if (!recp) {
    return <h2 className="p-5 text-center">Recipe not found!</h2>;
  }

  const {
    name,
    ingredients,
    description,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    cuisine,
    caloriesPerServing,
    image,
    mealType,
  } = recp;

  const deleteHandler = () => {
    const filteredRecipe = recipe.filter((elem) => elem.id != params.id);
    const updatedFav = favorite.filter((f) => f.id != recp.id);

    setRecipe(filteredRecipe);
    setFavorite(updatedFav);

    localStorage.setItem("recipes", JSON.stringify(filteredRecipe));
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.success("Recipe deleted!", { position: "bottom-left" });
    navigate("/recipes");
  };

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const FavHandler = () => {
    let copyfav = [...favorite];
    copyfav.push(recp);
    setFavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const filterfav = favorite.filter((f) => f.id != recp?.id);
    setFavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  useEffect(() => {}, []);

  return (
    <div className="singleDetail p-3 initial lg:flex lg:gap-[1vw] lg:p-[1.5vw]">
      <div className="left">
        {/* image */}
        <div
          className="img rounded-xl flex align-end"
          style={{ backgroundImage: `url(${image})` }}
          alt=""
        >
          <div className="feature">
            <i
              onClick={() => navigate(`/recipes/update/${params.id}`)}
              className="ri-pencil-fill"
            ></i>

            <i onClick={deleteHandler} className="ri-delete-bin-6-fill"></i>

            {favorite.find((f) => f.id == recp?.id) ? (
              <i onClick={UnFavHandler} className="ri-heart-3-fill" />
            ) : (
              <i onClick={FavHandler} className="ri-heart-line"></i>
            )}
          </div>
        </div>

        {/* info */}
        <div className="info bg-white">
          <h2 className="name">{name}</h2>
          <p>{description}</p>
          <div className="fewdetails">
            <div className="minidiv">
              <h5 className="det-text">{cuisine}</h5>
            </div>
            <div className="minidiv">
              <h5 className="det-text">{mealType[0]}</h5>
            </div>
          </div>
        </div>

        {/* time & calorie */}
        <div className="midDet flex justify-between items-center">
          <div className="minidivs">
            <i className="ri-bowl-line"></i>
            <h6>{prepTimeMinutes} min</h6>
          </div>
          <div className="minidivs">
            <i className="ri-time-line"></i>
            <h6>{cookTimeMinutes} min</h6>
          </div>
          <div className="minidivs">
            <i className="ri-fire-line"></i>
            <h6>{caloriesPerServing} cal</h6>
          </div>
          {/* <hr className="my-3 h-[.1vw]" /> */}
        </div>
      </div>

      <div className="right">
        <h3>Ingredients:</h3>
        <div className="ingr">
          {ingredients.map((ingredient, idx) => {
            return (
              <div
                className="ins flex items-start bg-white mb-[2vw] lg:mb-[1vw]"
                key={idx}
              >
                <div className="rNum"></div>
                {ingredient}
              </div>
            );
          })}
        </div>

        <h3>Instructions:</h3>
        <div className="instruction">
          {instructions.map((instruction, idx) => {
            return (
              <div
                className="ins flex items-start bg-white mb-[2vw] lg:mb-[1vw]"
                key={idx}
              >
                <div className="rNum-2">{idx + 1}</div>
                {instruction}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
