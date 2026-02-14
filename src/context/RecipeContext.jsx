import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {

  // const [recipe, setRecipe] = useState([])

  // useEffect(()=>{
  //   setRecipe(JSON.parse(localStorage.getItem("recipes")) || [])
  // },[])

  const [recipe, setRecipe] = useState([
    {
      id: 1,
      name: "Classic Margherita Pizza",
      fav: false,
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with tomato, mozzarella, basil, olive oil, and baked quickly in a wood-fired oven.",
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      cuisine: "Italian",
      caloriesPerServing: 300,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      mealType: ["Dinner"],
    },
    {
      id: 2,
      name: "Vegetarian Stir-Fry",
      fav: false,
      ingredients: [
        "Tofu, cubed",
        "Broccoli florets",
        "Carrots, sliced",
        "Bell peppers, sliced",
        "Soy sauce",
        "Ginger, minced",
        "Garlic, minced",
        "Sesame oil",
        "Cooked rice for serving",
      ],
      description:
        "A quick and healthy stir-fry made with tofu and fresh vegetables tossed in a savory soy-ginger sauce.",
      instructions: [
        "In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      cuisine: "Asian",
      caloriesPerServing: 250,
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      mealType: ["Lunch"],
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      fav: false,
      ingredients: [
        "All-purpose flour",
        "Butter, softened",
        "Brown sugar",
        "White sugar",
        "Eggs",
        "Vanilla extract",
        "Baking soda",
        "Salt",
        "Chocolate chips",
      ],
      description:
        "Classic American-style cookies with a soft, chewy center and rich chocolate chips in every bite.",
      instructions: [
        "Preheat the oven to 350°F (175°C).",
        "In a bowl, cream together softened butter, brown sugar, and white sugar.",
        "Beat in eggs one at a time, then stir in vanilla extract.",
        "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
        "Fold in chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until edges are golden brown.",
        "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 10,
      cuisine: "American",
      caloriesPerServing: 150,
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      mealType: ["Snack", "Dessert"],
    },
    {
      id: 4,
      name: "Chicken Alfredo Pasta",
      fav: false,
      ingredients: [
        "Fettuccine pasta",
        "Chicken breast, sliced",
        "Heavy cream",
        "Parmesan cheese, grated",
        "Garlic, minced",
        "Butter",
        "Salt and pepper to taste",
        "Fresh parsley for garnish",
      ],
      description:
        "A creamy Italian pasta dish made with tender chicken, fettuccine, and rich Alfredo sauce.",
      instructions: [
        "Cook fettuccine pasta according to package instructions.",
        "In a pan, sauté sliced chicken in butter until fully cooked.",
        "Add minced garlic and cook until fragrant.",
        "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
        "Season with salt and pepper to taste.",
        "Combine the Alfredo sauce with cooked pasta.",
        "Garnish with fresh parsley before serving.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      cuisine: "Italian",
      caloriesPerServing: 500,
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      mealType: ["Lunch", "Dinner"],
    },
    {
      id: 5,
      name: "Mango Salsa Chicken",
      fav: false,
      ingredients: [
        "Chicken thighs",
        "Mango, diced",
        "Red onion, finely chopped",
        "Cilantro, chopped",
        "Lime juice",
        "Jalapeño, minced",
        "Salt and pepper to taste",
        "Cooked rice for serving",
      ],
      description:
        "Juicy chicken paired with a refreshing mango salsa that’s sweet, tangy, and a little spicy.",
      instructions: [
        "Season chicken thighs with salt and pepper.",
        "Grill or bake chicken until fully cooked.",
        "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
        "Dice the cooked chicken and mix it with the mango salsa.",
        "Serve over cooked rice.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      cuisine: "Mexican",
      caloriesPerServing: 380,
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      mealType: ["Dinner"],
    },
    {
      id: 6,
      name: "Quinoa Salad with Avocado",
      fav: false,
      ingredients: [
        "Quinoa, cooked",
        "Avocado, diced",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red bell pepper, diced",
        "Feta cheese, crumbled",
        "Lemon vinaigrette dressing",
        "Salt and pepper to taste",
      ],
      description:
        "A light and nutritious Mediterranean-inspired salad with quinoa, creamy avocado, and fresh veggies.",
      instructions: [
        "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
        "Drizzle with lemon vinaigrette dressing and toss to combine.",
        "Season with salt and pepper to taste.",
        "Chill in the refrigerator before serving.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      cuisine: "Mediterranean",
      caloriesPerServing: 280,
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      mealType: ["Lunch", "Side Dish"],
    },
    {
      id: 7,
      name: "Tomato Basil Bruschetta",
      fav: false,
      ingredients: [
        "Baguette, sliced",
        "Tomatoes, diced",
        "Fresh basil, chopped",
        "Garlic cloves, minced",
        "Balsamic glaze",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      description:
        "A classic Italian appetizer featuring crispy baguette topped with fresh tomato, basil, and garlic.",
      instructions: [
        "Preheat the oven to 375°F (190°C).",
        "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
        "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
        "Season with salt and pepper to taste.",
        "Top each toasted baguette slice with the tomato-basil mixture.",
        "Drizzle with balsamic glaze before serving.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 10,
      cuisine: "Italian",
      caloriesPerServing: 120,
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      mealType: ["Appetizer"],
    },
    {
      id: 8,
      name: "Tofu and Broccoli Stir-Fry",
      fav: false,
      ingredients: [
        "Firm tofu, cubed",
        "Broccoli florets",
        "Soy sauce",
        "Oyster sauce (or vegetarian mushroom sauce)",
        "Sesame oil",
        "Garlic, minced",
        "Ginger, minced",
        "Cornstarch",
        "Cooked white rice for serving",
      ],
      description:
        "A healthy plant-based stir-fry with crispy tofu, broccoli, and a flavorful savory sauce.",
      instructions: [
        "Press and cube the tofu to remove excess water.",
        "In a bowl, mix soy sauce, vegetarian oyster sauce (or mushroom sauce), sesame oil, and cornstarch to create the sauce.",
        "In a wok, stir-fry tofu until golden brown. Remove from the wok.",
        "Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok.",
        "Add the cooked tofu back to the wok and pour the sauce over the mixture.",
        "Stir until everything is coated and heated through.",
        "Serve over cooked white rice.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      cuisine: "Asian",
      caloriesPerServing: 280,
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      mealType: ["Dinner"],
    },
    {
      id: 9,
      name: "Caprese Salad",
      fav: false,
      ingredients: [
        "Tomatoes, sliced",
        "Fresh mozzarella cheese, sliced",
        "Fresh basil leaves",
        "Balsamic glaze",
        "Extra virgin olive oil",
        "Salt and pepper to taste",
      ],
      description:
        "A simple and refreshing Italian salad made with fresh tomatoes, mozzarella, and basil.",
      instructions: [
        "Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.",
        "Tuck fresh basil leaves between the slices.",
        "Drizzle with balsamic glaze and extra virgin olive oil.",
        "Season with salt and pepper to taste.",
        "Serve immediately as a refreshing salad.",
      ],
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      cuisine: "Italian",
      caloriesPerServing: 200,
      image: "https://cdn.dummyjson.com/recipe-images/9.webp",
      mealType: ["Lunch"],
    },
    {
      id: 10,
      name: "Shrimp Scampi Pasta",
      fav: false,
      ingredients: [
        "Linguine pasta",
        "Shrimp, peeled and deveined",
        "Garlic, minced",
        "White wine",
        "Lemon juice",
        "Red pepper flakes",
        "Fresh parsley, chopped",
        "Salt and pepper to taste",
      ],
      description:
        "An Italian-American pasta dish with juicy shrimp sautéed in garlic, butter, and white wine sauce.",
      instructions: [
        "Cook linguine pasta according to package instructions.",
        "In a skillet, sauté minced garlic in olive oil until fragrant.",
        "Add shrimp and cook until pink and opaque.",
        "Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.",
        "Season with red pepper flakes, salt, and pepper.",
        "Toss cooked linguine in the shrimp scampi sauce.",
        "Garnish with chopped fresh parsley before serving.",
      ],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      cuisine: "Italian",
      caloriesPerServing: 400,
      image: "https://cdn.dummyjson.com/recipe-images/10.webp",
      mealType: ["Dinner"],
    },
  ]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      try {
        const parsed = JSON.parse(storedRecipes);
        if (Array.isArray(parsed)) {
          const merged = [
            ...parsed,
            ...recipe.filter(
              (pre) => !parsed.some((local) => local.id === pre.id)
            ),
          ];
          setRecipe(merged);
        }
      } catch (err) {
        console.error("Error parsing localStorage recipes:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipe));
  }, [recipe]);

  return (
    <recipeContext.Provider value={{ recipe, setRecipe }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
