// Breakfast
export async function getBreakfastData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
  );
  const data = await response.json();
  return data.meals;
}
// Dessert
export async function getDessertData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );
  const data = await response.json();
  return data.meals;
}

// Beef
export async function getBeefData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
  );
  const data = await response.json();
  return data.meals;
}

// pasta
export async function getPastaData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta"
  );
  const data = await response.json();
  return data.meals;
}

// Pork
export async function getPorkData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork"
  );
  const data = await response.json();
  return data.meals;
}

// SeaFood
export async function getSeaFoodData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await response.json();
  return data.meals;
}

// Vegan
export async function getVeganData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan"
  );
  const data = await response.json();
  return data.meals;
}

// Vegetarian
export async function getVegetarianData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
  );
  const data = await response.json();
  return data.meals;
}
