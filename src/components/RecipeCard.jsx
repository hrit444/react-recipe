import { useEffect, useState } from "react";
import "../components/RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

  const navigate = useNavigate();

  const {
    name,
    id,
    caloriesPerServing,
    description,
    cuisine,
    mealType,
    image,
  } = recipe;

  // const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  // const FavHandler = () => {
  //   let copyfav = [...favorite];
  //   copyfav.push(recipe);
  //   setFavorite(copyfav);
  //   localStorage.setItem("fav", JSON.stringify(copyfav));
  // };

  // const UnFavHandler = () => {
  //   const filterfav = favorite.filter((f) => f.id != recipe?.id);
  //   setFavorite(filterfav);
  //   localStorage.setItem("fav", JSON.stringify(filterfav));
  // };

  // useEffect(() => {
  //   console.log("hello");
  //   ()=>{
  //     console.log("hi");
      
  //   }
  // }, []);

  // const isFav = favorite.find((f) => f.id == recipe?.id)

  useEffect(()=>{},[])

  return (
    <div className="rec overflow-hidden">
      <div
        className="img-div flex items-start justify-end"
        style={{ backgroundImage: `url(${image})` }}
        alt=""
      >
        {/* { isFav ? (
          <i onClick={UnFavHandler} className="ri-heart-3-fill bg-white text-red-400 rounded-full h-[7vw] w-[7vw] lg:h-[2.5vw] lg:w-[2.5vw] lg:text-[1.5vw] flex items-center justify-center mt-[1vw] mr-[1vw] lg:mt-[.5vw] lg:mr-[.5vw]" />
        ) : (
          <i
            onClick={FavHandler}
            className="ri-heart-line bg-white rounded-full h-[7vw] w-[7vw] lg:h-[2.5vw] lg:w-[2.5vw] lg:text-[1.5vw] flex items-center justify-center mt-[1vw] mr-[1vw] lg:mt-[.5vw] lg:mr-[.5vw]"
          ></i>
        )} */}
      </div>
      <h2>{name}</h2>
      <div className="fewdetails">
        <div className="minidiv">
          <h5>{cuisine}</h5>
        </div>
        <div className="minidiv">
          <h5>{mealType[0]}</h5>
        </div>
      </div>
      <p>
        {description ? description.slice(0, 105) : "No description available"}
        ...
      </p>
      <div className="btn flex items-center h-[2vw] justify-between gap-[2vw] lg:gap-[.8vw]">
        <h3>{caloriesPerServing} cal</h3>

        <button
          onClick={() => {
            navigate(`/recipes/details/${id}`);
          }}
          className="my-btn"
        >
          <h6 className="hidden xl:inline lg:inline xl:text-[1.1vw]">Menu</h6>
          <i className="ri-arrow-right-up-line text-white text-[5vw] lg:text-[1.5vw]"></i>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
