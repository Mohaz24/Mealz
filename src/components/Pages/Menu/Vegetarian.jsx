import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Card from "./Card";

function Vegetarian() {
  const [mealz, setMealz] = useState([]);
  const [on, setOn] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [ storeToLocalStorage, setStoreToLocalStorage] = useState([])
  const [savedData, setSavedData] = useState([])

  // Remember to fix the cart switching on/off color later !!

  const localData =  savedData && savedData.map(value => {
     if(value.isFilled){
       return localStorage.setItem(`${value.idMeal}`, JSON.stringify(value))
     } else {
       return localStorage.removeItem(value.idMeal)
     }
  })



  useEffect(() => {
    const getFood = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
      );
      try {
        const data = await response.json();
        setMealz(data.meals);
      } catch (err) {
        setMealz(err);
        console.log(err);
      }
    };
    getFood();
  }, []);


  useEffect(() => {
    const hide = on ? "hidden" : "visible";
    const darktheme = on ? "#edf2f7" : "#FFF"
    document.body.style.overflow = `${hide}`;
    document.body.style.backgroundColor = `${darktheme}`
  }, [toggle]);

  function toggle(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
      const modified = data.meals && data.meals.map(ingre => {
        return {
          ...ingre,
          isFilled: false
        }
      })
      setIngredients(modified)
      setStoreToLocalStorage(modified)
    })
    setOn((prevOn) => !prevOn);
  }
  

  function addToCart(id){
    const modified = storeToLocalStorage.map(ingre => {
      return ingre.idMeal === id ? {
        ...ingre, 
        isFilled: !ingre.isFilled,
        price: 21

      }
      : ingre
    })
    setStoreToLocalStorage(modified)
    setSavedData(modified)
  
  }


  const menuList =  mealz.map((meal) => {
    const customStyles = {
      backgroundImage: `url(${meal.strMealThumb})`,
      backgroundSize: "cover",
    };
    return (
      <div
        key={meal.idMeal}
        className="w-10/12 lg:w-11/12 h-full">
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
            onClick={() => toggle(meal.idMeal)}
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

      {on ? (
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
                   toggle={toggle}
                   addToCart={() => addToCart(items.idMeal)}
                   cart={storeToLocalStorage}
                  />
                </div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
}

export default Vegetarian;