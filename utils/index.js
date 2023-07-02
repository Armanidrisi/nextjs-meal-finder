/**
 * Fetch meals from the API based on the provided query.
 *
 * @param {string} query - The query string for searching meals.
 * @returns {Promise<object>} - A promise that resolves to the retrieved meal data.
 * @throws {Error} - If there's an issue with the API request.
 */
export const fetchMeals = async (query) => {
  try {
    // Fetch meals from the API based on the provided query
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
        encodeURIComponent(query),
      {
        next: {
          revalidate: 60, // Set revalidation time to 60 seconds
        },
      }
    );

    const data = await response.json();
    return data; // Return the retrieved data
  } catch (error) {
    throw new Error(error); // Throw an error if there's an issue with the API request
  }
};

/**
 * Fetch a specific meal from the API based on the provided ID.
 *
 * @param {string} id - The ID of the meal to fetch.
 * @returns {Promise<object>} - A promise that resolves to the retrieved meal data.
 * @throws {Error} - If there's an issue with the API request.
 */
export const fetchMeal = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Add a delay of 2000ms (2 seconds)
  try {
    // Fetch a specific meal from the API based on the provided ID
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      {
        next: {
          revalidate: 60, // Set revalidation time to 60 seconds
        },
      }
    );
    const data = await response.json();
    return data; // Return the retrieved data
  } catch (error) {
    throw new Error(error); // Throw an error if there's an issue with the API request
  }
};

/**
 * Get the list of ingredients from the meal data.
 *
 * @param {object} data - The meal data retrieved from the API.
 * @returns {string[]} - An array of ingredients with their measures.
 */
export const getIngredients = (data) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data.meals[0]["strIngredient" + i]; // Get the ingredient at the current index
    const measure = data.meals[0]["strMeasure" + i]; // Get the corresponding measure for the ingredient
    if (ingredient) {
      const ingredientWithMeasure = ingredient + " - " + measure; // Combine the ingredient and measure
      ingredients.push(ingredientWithMeasure); // Add the ingredient with measure to the list
    }
  }
  return ingredients; // Return the list of ingredients
};
