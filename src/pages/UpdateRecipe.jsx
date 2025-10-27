import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { recipeContext } from "../Context/RecipeContext";
import { toast } from "react-toastify";

const UpdateRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe, setRecipe } = useContext(recipeContext);

  const currentRecipe = recipe.find((r) => r.id == id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: currentRecipe,
  });

  useEffect(() => {
    reset(currentRecipe);
  }, [currentRecipe, reset]);

  const UpdateHandler = (data) => {
    if (data.mealType) {
      data.mealType = Array.isArray(data.mealType)
        ? data.mealType
        : [data.mealType];
    }

    if (typeof data.ingredients === "string") {
      data.ingredients = data.ingredients.split(",").map((i) => i.trim());
    }

    if (typeof data.instructions === "string") {
      data.instructions = data.instructions.split(",").map((i) => i.trim());
    }

    const updated = recipe.map((recp) =>
      recp.id == id ? { ...recp, ...data } : recp
    );

    setRecipe(updated);

    localStorage.setItem("recipes", JSON.stringify(updated))
    toast.success("Recipe updated!");
    navigate(`/recipes/details/${id}`);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit(UpdateHandler)}>
        <h1>Update Recipe</h1>
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

        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
