import { useForm } from "react-hook-form";
import "../pages/CreateRecipes.css";
import { nanoid } from "nanoid/non-secure";
import { toast } from "react-toastify";
import { useContext } from "react";
import { recipeContext } from "../Context/RecipeContext";
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { recipe, setRecipe } = useContext(recipeContext);

  const SubmitHandler = (data) => {
    data.id = nanoid();

    if (data.mealType) {
      data.mealType = Array.isArray(data.mealType)
        ? data.mealType
        : [data.mealType];
    }

    // Convert ingredients & instructions to arrays
    data.ingredients = data.ingredients.split(",").map((i) => i.trim());
    data.instructions = data.instructions.split(",").map((i) => i.trim());

    setRecipe([...recipe, data]);

    localStorage.setItem("recipes", JSON.stringify(data))

    toast.success("done");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <h1>Create Recipe</h1>
        <h4>Name:</h4>
        <input
          {...register("name", { required: "This place can not be empty!" })}
          type="text"
          placeholder="Enter recipe name"
        />
        <small>{errors?.name?.message}</small>

        <h4>Add Description:</h4>
        <textarea
          {...register("description", {
            required: "This place can not be empty!",
          })}
          type="text"
          placeholder="Enter description"
          rows="5"
        ></textarea>
        <small>{errors?.description?.message}</small>

        <h4>Preparation time (in minutes):</h4>
        <input
          {...register("prepTimeMinutes", {
            required: "This place can not be empty!",
          })}
          type="number"
          id="minutes"
          min="0"
          max="299"
          step="1"
          placeholder="Enter preparation time"
        />
        <small>{errors?.prepTimeMinutes?.message}</small>

        <h4>Cooking time (in minutes):</h4>
        <input
          {...register("cookTimeMinutes", {
            required: "This place can not be empty!",
          })}
          type="number"
          id="minutes"
          min="0"
          max="299"
          step="1"
          placeholder="Enter cooking time"
        />
        <small>{errors?.cookTimeMinutes?.message}</small>

        <h4>Calories per serving (in calories):</h4>
        <input
          {...register("caloriesPerServing", {
            required: "This place can not be empty!",
          })}
          type="number"
          id="minutes"
          min="0"
          max="5000"
          step="1"
          placeholder="Enter calories"
        />
        <small>{errors?.caloriesPerServing?.message}</small>

        <h4>Select cuisine:</h4>
        <select {...register("cuisine")}>
          <option value="Indian">Indian</option>
          <option value="Asian">Asian</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
        </select>

        <h4>Select meal type:</h4>
        <select {...register("mealType")}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Salad">Salad</option>
        </select>

        <h4>Add ingredients:</h4>
        <textarea
          {...register("ingredients", {
            required: "This place can not be empty!",
          })}
          type="text"
          placeholder="Enter ingredients separate by commas"
          rows="5"
        ></textarea>
        <small>{errors?.ingredients?.message}</small>

        <h4>Add instructions:</h4>
        <textarea
          {...register("instructions", {
            required: "This place can not be empty!",
          })}
          type="text"
          placeholder="Enter instructions separate by commas"
          rows="5"
        ></textarea>
        <small>{errors?.instructions?.message}</small>

        <h4>Add image:</h4>
        <input
          {...register("image", { required: "This place can not be empty!" })}
          type="url"
          placeholder="Enter image link"
          rows="5"
        />
        <small>{errors?.image?.message}</small>

        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreateRecipes;
