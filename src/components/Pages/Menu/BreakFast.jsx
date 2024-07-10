import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { getBreakfastData } from "../../api";
import Card from "./Card";

export function loader() {
  return getBreakfastData();
}

function BreakFast() {
  const mealz = useLoaderData();
  const [on, setOn] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [storeToLocalStorage, setStoreToLocalStorage] = useState([]);
  const [addedToLocalStorage, setaddedToLocalStorage] = useState([]);

  const localData =
    addedToLocalStorage &&
    addedToLocalStorage.map((value) => {
      if (value.isFilled) {
        return localStorage.setItem(`${value.idMeal}`, JSON.stringify(value));
      } else {
        return localStorage.removeItem(value.idMeal);
      }
    });

  // useEffect(() => {
  //   const hide = on ? "hidden" : "visible";
  //   const darktheme = on === "show" ?  "#edf2f7" : "#FFF";
  //   document.body.style.overflow = `${hide}`;
  //   document.body.style.backgroundColor = `${darktheme}`;
  // }, [toggleReadMoreCard]);

  function toggleReadMoreCard(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const modifyIngredients =
          data.meals &&
          data.meals.map((ingre) => {
            return {
              ...ingre,
              isFilled: false,
            };
          });
        setIngredients(modifyIngredients);
        setStoreToLocalStorage(modifyIngredients);
      });
    setOn(true);
  }

  function addToCart(id) {
    const cartInfoToLocalStroage = storeToLocalStorage.map((ingre) => {
      return ingre.idMeal === id
        ? {
            ...ingre,
            isFilled: !ingre.isFilled,
            price: 7,
          }
        : ingre;
    });
    setStoreToLocalStorage(cartInfoToLocalStroage);
    setaddedToLocalStorage(cartInfoToLocalStroage);
  }

  const menuList = mealz.map((meal) => {
    const customStyles = {
      backgroundImage: `url(${meal.strMealThumb})`,
      backgroundSize: "cover",
    };
    return (
      <div key={meal.idMeal} className="w-10/12 lg:w-11/12 h-full">
        <div
          className="shadow-lg bg-white m-auto flex 
        flex-col items-center justify-between gap-5 sm:gap-1
        lg:w-full custom-card-lg"
        >
          <img
            style={customStyles}
            className="w-full h-52 rounded-xl lg:h-full"
          />
          <h1 className="text-xl font-normal sm:py-3 lg:pl-3 lg:pt-5 lg:text-2xl">
            {meal.strMeal}
          </h1>
          <button
            onClick={() => toggleReadMoreCard(meal.idMeal)}
            className="bg-red-700 font-extraligth w-full p-2 text-yellow-200 
         sm:mt-5 lg:text-2xl myButton "
            disabled={on ? true : false}
          >
            View more
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="breakfast-component-utility-custom-class">
      <div className="ml-5 sm:mt-1  flex gap-4 text-xl font-extralight ">
        <Link to="/menu">
          <IoMdArrowBack />
          <h2 className="ml-4 font-extraligth lg:text-2xl"> Return to menu</h2>
        </Link>
        <h2 className="m-auto titles hidden sm:flex lg:text-2xl">
          Choose your favorite meal{" "}
        </h2>
      </div>

      <div
        className="breakfast-utility-custom-class grid 
      grid-cols-1 justify-items-center gap-16 sm:grid-cols-2 
      sm:gap-5 md:gap-8 lg:grid-cols-3 lg:gap-10 mt-10 mb-6"
      >
        {menuList}
      </div>

      { on  ? (
        <div>
          {ingredients &&
            ingredients.map((items) => {
              const tags =
                items.strTags !== null ? items.strTags.split(",") : null;

              return (
                <div key={items.idMeal}>
                  <Card
                    id={items.idMeal}
                    {...items}
                    tagArr={tags}
                    toggle={toggleReadMoreCard}
                    addToCart={() => addToCart(items.idMeal)}
                    cart={storeToLocalStorage}
                  />
                </div>
              );
            })}
        </div>
      ) : null }
    </div>
  );
}

export default BreakFast;
