// import { getBreakfastData } from "./api"; 

// //console.log(getBreakfastData())

export const cartItemID = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    const data = await response.json()
   return getCartItems(data.meals.map(task => task.idMeal))
}

cartItemID()

export const getCartItems = async(id) => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      return data.meals
 }