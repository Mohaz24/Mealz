import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Footer from "../../Footer";


function Menu() {
  return (
    <div className="menu-page-utiltiy-class">
      <h1 className=" titles text-center text-3xl mb-5">List of categories</h1>
      <section
        className="grid grid-cols-1 justify-items-center gap-7 
 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-9
 "
      >
        <div className="bg-breakfast w-9/12 lg:w-full  md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/breakfast">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Breakfast
            </h1>
          </Link>
        </div>
        <div className="bg-dessert w-9/12  lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/dessert">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Dessert
            </h1>
          </Link>
        </div>
        <div className="bg-beef w-9/12  lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/beef">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Beef
            </h1>
          </Link>
        </div>
        <div className="bg-pork w-9/12  lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/pork">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Pork
            </h1>
          </Link>
        </div>
        <div className="bg-seafood w-9/12  lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/seafood">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Seafood
            </h1>
          </Link>
        </div>
        <div className="bg-vegan w-9/12 lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/vegan">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Vegan
            </h1>
          </Link>
        </div>
        <div className="bg-vegetarian  w-9/12  lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/vegetarian">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Vegetarian
            </h1>
          </Link>
        </div>

        <div className="bg-pasta w-9/12  lg:w-full md:w-11/12 rounded-xl opacity-1 flex flex-col items-center justify-center ">
          <Link to="/menu/pasta">
            <h1 className="text-white text-5xl hover:shadow-lg hover:underline">
              Pasta
            </h1>
          </Link>
        </div>
      </section>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Menu;
