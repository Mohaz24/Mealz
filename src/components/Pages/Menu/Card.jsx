import { AiOutlineClose } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import List from "../../SVG/List.svg";
import { Link } from "react-router-dom";

function Card(props) {
  const styled = props.cart.map((value) => {
    return value.isFilled ? "#05C56B" : "";
  });

  const stylesCart = {
    color: styled,
  };

  return (
    <div>
      <div
        className="fixed top-32 right-0 bottom-0  
        left-0 m-auto custom-height-mobile bg-white shadow-lg rounded-lg w-11/12 h-full
        sm:w-10/12 sm:top-48  md:left-16 custom-height-md  lg:w-10/12 custom-height-lg  lg:top-64
        lg:pt-2 custom-scroll-y"
      >
        <section className="flex justify-between items-center p-5">
          <div className="flex gap-2 items-center  cursor-pointer lg:text-2xl">
            <IoCartSharp
              style={stylesCart}
              onClick={props.addToCart}
              className={`w-5 h-5 hover:text-[#05C56B]  sm:w-6  sm:h-6 lg:w-7 lg:h-7`}
            />
            <p className="hidden sm:flex">Add to the cart</p>
          </div>
          <h2 className="titles text-md md:text-lg lg:text-2xl">
            {props.strMeal}
          </h2>
          <AiOutlineClose
            className=" hover:text-red-600 w-5 h-5
                            sm:w-6 sm:h-6 lg:w-7 lg:h-7 cursor-pointer"
            onClick={props.toggle}
          />
        </section>

        <section
          className="grid grid-cols-1 place-items-start pl-7 pt-4
                          gap-2 sm:grid-cols-2 lg:grid-cols-3"
        >
          <img
            style={{
              backgroundImage: `url(${props.strMealThumb})`,
              backgroundSize: `cover`,
            }}
            className=" w-11/12 custom-card-lg sm:w-full sm:h-48  md:w-full md:h-64 
                            custom-heights rounded-lg
                            lg:w-full "
          />

          <div>
            <Link
              className="flex flex-col items-start gap-2 cursor-pointer"
              to={props.strYoutube === "" ? "/NotFoundPage" : props.strYoutube}
            >
              <FaYoutube className="text-red-600 w-16 h-16 " />
              <p className="font-extralight sm:text-lg lg:text-xl">
                {" "}
                Youtube video{" "}
              </p>
            </Link>
            <h2 className="titles pt-4 pb-3 sm:text-lg lg:text-2xl">Tags</h2>
            {props.tagArr ? (
              <>
                {props.tagArr && (
                  <div className="custom-tags-classes ">{props.tagArr[0]}</div>
                )}
                {props.tagArr && (
                  <div className="custom-tags-classes">{props.tagArr[1]}</div>
                )}
                {props.tagArr && (
                  <div className="custom-tags-classes">{props.tagArr[2]}</div>
                )}
                {props.tagArr && (
                  <div className="custom-tags-classes ">{props.tagArr[3]}</div>
                )}
                {props.tagArr && (
                  <div className=" custom-tags-classes">{props.tagArr[4]}</div>
                )}
                {props.tagArr && (
                  <div className="custom-tags-classes">{props.tagArr[5]}</div>
                )}
              </>
            ) : (
              <div className="custom-tags-classes py-1">No tags available</div>
            )}
          </div>

          <div className=" flex flex-col gap-3 font-extralight mt-4">
            <h2 className="titles text-lg  lg:text-xl">
              Ingredients and measurement
            </h2>
            {props.strIngredient1 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient1}({props.strMeasure1})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient2 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient2}({props.strMeasure2})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient3 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient3}({props.strMeasure3})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient4 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient4}({props.strMeasure4})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient5 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient5}({props.strMeasure5})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient6 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient6}({props.strMeasure6})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient7 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient7}({props.strMeasure7})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient8 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient8}({props.strMeasure8})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient9 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient9}({props.strMeasure9})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient10 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient10}({props.strMeasure10})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient11 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient11}({props.strMeasure11})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient12 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient12}({props.strMeasure12})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient13 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient13}({props.strMeasure13})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient14 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient14}({props.strMeasure14})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient15 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient15}({props.strMeasure15})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient16 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient16}({props.strMeasure16})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient17 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient17}({props.strMeasure17})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient18 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient18}({props.strMeasure18})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient19 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient19}({props.strMeasure19})
                </li>{" "}
              </ul>
            )}
            {props.strIngredient20 && (
              <ul className="flex items-center gap-2">
                <img src={List} alt="list" />
                <li className="md:text-lg">
                  {props.strIngredient20}({props.strMeasure20})
                </li>{" "}
              </ul>
            )}
          </div>

          <div className="font-extralight mt-5 mb-7 ">
            <h2 className="titles text-lg md:text-xl lg:text-2xl">Method</h2>
            <p className="mt-4 sm:text-lg lg:text-md ">
              {props.strInstructions}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Card;
