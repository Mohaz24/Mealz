import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../Footer";

function Cart() {
  const [cart, setCart] = useState([]);
  const [on, setOn] = useState(false);
  const [isTrue, setIsTrue] = useState("loading");
  const [formData, setFormData] = useState({ firstName: "" });

  useEffect(() => {
    let extractLocalStorageData = [];
    const keys = Object.keys(localStorage);

    for (let key of keys) {
      const data = JSON.parse(localStorage.getItem(`${key}`));
      extractLocalStorageData.push(data);
      setCart(extractLocalStorageData);
      setIsTrue("pending");
    }
  }, []);

  const total =
    cart &&
    cart.reduce((oldValue, currentValue) => {
      return oldValue + currentValue.price;
    }, 0);

  function emptyCart() {
    setIsTrue("removed");
  }

  function removeItems(id) {
    const deleteItems =
      cart &&
      cart.filter((items) => {
        return items.idMeal === id ? localStorage.removeItem(`${id}`) : items;
      });
    setCart(deleteItems);
    setIsTrue("deleted");
  }

  function procceedItems() {
    setOn((prevOn) => !prevOn);
    setIsTrue("pending");
  }

  function handleChangeForm(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submit(e) {
    e.preventDefault();
    setIsTrue("success");
    localStorage.clear();
    setCart([]);
  }

  const localStorageNewData =
    cart &&
    cart.map((items) => {
      const { strMealThumb, price, strMeal } = items;
      return (
        <div key={items.idMeal}>
          <div className="w-full h-36 pt-3 rounded-lg mb-10 relative lg:h-48">
            <div className="grid grid-cols-2 place-items-start mb-10 lg-grid-cols-3  lg:gap-6">
              <img
                src={strMealThumb}
                alt="img"
                className="w-32 ml-4 rounded-md  md:w-36 lg:w-48 "
              />
              <div className="flex flex-col">
                <h1
                  className=" w-full font-medium  text-sm leading-8 tracking-normal 
          sm:w-full md:text-lg  lg:pb-5 lg:text-xl
          "
                >
                  {strMeal}
                </h1>
                <h2
                  className=" pt-2 text-sm leading-8 font-medium tracking-normal md:pt-4
              md:text-lg lg:text-xl   lg:pb-5

              "
                >
                  <span className=" text-sm mr-3 md:text-lg lg:text-xl ">
                    Price:
                  </span>
                  ${price}
                </h2>

                <div className="pt-1 flex items-center gap-10  md:pt-4 lg:pt-4 lg:gap-56">
                  <h2 className="titles text-sm md:text-lg lg:text-xl">
                    Delete
                  </h2>
                  <MdDelete
                    onClick={() => removeItems(items.idMeal)}
                    disabled={isTrue === "removed" ? false : false}
                    className="w-5 h-10 hover:text-red-500 lg:w-10 lg:h-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="custom-class-cart mt-10 relative  ">
      <div
        className="w-11/12 h-full pt-3 m-auto
      shadow-md border-2 rounded-lg bg-white 
      sm:w-8/12  md:w-8/12 lg:w-7/12 
      "
      >
        <h1 className="text-center titles text-xl pb-6 lg:text-2xl">
          List of items
        </h1>
        {cart && cart.length > 0 ? (
          localStorageNewData
        ) : (
          <p className="text-center p-4 text-lg ">Cart is empty add items!</p>
        )}

        {cart.length > 0 && (
          <>
            <div className="border-2  w-full  "></div>
            <div className="flex items-center justify-between p-4">
              <h2 className="ml-2 titles lg:text-xl  ">Total price: </h2>
              <div className="mr-3">
                <h3 className="font-black lg:text-lg">${total}</h3>
              </div>
            </div>
            <button
              onClick={procceedItems}
              className="font-medium px-10 py-2 bg-red-600 text-white
          h-14 w-full
         "
            >
              Procceed items
            </button>
          </>
        )}

        {isTrue === "pending" && on ? (
          <div
            className=" w-11/12 custom-height-lg fixed top-48 left-0 right-0 bottom-0 m-auto scroll custom-scroll-y  
       sm:w-8/12 sm:top-12  md:w-7/12  lg:w-6/12 lg:top-10 "
          >
            <div className="bg-white border-2 relative rounded-lg p-6">
              <AiOutlineClose
                onClick={procceedItems}
                className="w-5 h-6 absolute right-6 top-7 hover:text-red-500"
              />
              <h2 className="text-lg font-medium mb-6">Payment Information</h2>
              <form>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expiration-date"
                      placeholder="MM / YY"
                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="000"
                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="card-holder"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Card Holder
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => handleChangeForm(e)}
                      name="firstName"
                      value={formData.firstName}
                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    id="submitBtn"
                    type="submit"
                    onClick={(e) => submit(e)}
                    disabled={formData.firstName === "" ? true : false}
                    className="w-full bg-green-500 text-white font-medium py-3 rounded-lg 
                   focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>

      {isTrue === "success" && formData ? (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg
        mt-4  w-11/12 mx-auto  m-auto sm:w-8/12 md:w-8/12 lg:w-7/12 "
        >
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Order Status: Confirmed</p>
            <AiOutlineClose className="w-5 h-5" onClick={emptyCart} />
          </div>
          <p className="text-sm pt-2">
            Your order has been successfully confirmed
            <span className="font-medium m-1 text-red-500">
              {formData.firstName}
            </span>
            and is now being processed.
          </p>
        </div>
      ) : null}
      {isTrue === "success" || isTrue === "pending" ? (
        <footer className="hidden mt-8 ">
          <Footer />
        </footer>
      ) : (
        <footer className="block mt-8 ">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default Cart;
