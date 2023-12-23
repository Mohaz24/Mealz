import { NavLink, Outlet } from "react-router-dom";
import Mealz from "./SVG/Mealz.svg";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import useToggleHook from "./Hooks/useToggleHook";


function Header() {
  const [on, toggle] = useToggleHook(false);
  return (
    <>
      <header
        className="flex justify-between items-center p-4 font-sans  lg:p-5"
      >
        <img src={Mealz} alt="logo" className="sm:w-20 md:w-24 lg:w-24" />
        <nav
          className="hidden sm:flex sm:gap-6 sm:text-lg md:gap-10 
        lg:gap-16 lg:text-xl"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active-links" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-links" : "")}
            to="menu"
          >
            Menu
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-links" : "")}
            to="partners"
          >
            Partners
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-links" : "")}
            to="jobs"
          >
            Jobs
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-links" : "")}
            to="cart"
          >
           <IoCartSharp className="ml-1 hover:text-red-600" />
          </NavLink>
        </nav>
        {on ? (
          <div className="navbar-utility-class sm:hidden">
            <AiOutlineClose
              onClick={toggle}
              className="icon absolute top-0 right-3 hover:text-red-400"
            />
            <NavLink
              className={({ isActive }) => (isActive ? "active-links" : "")}
              to="/"
            >
              Home
              <FaHome className="ml-2" />
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-links" : "")}
              to="menu"
            >
              Menu
              <MdOutlineRestaurantMenu className="ml-2" />
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active-links" : "")}
              to="partners"
            >
              Parnters
              <MdOutlineEmojiPeople className="ml-2" />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-links" : "")}
              to="jobs"
            >
              Jobs
              <FaBusinessTime className="ml-2" />
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-links" : "")}
              to="cart"
            >
              Cart
              <IoCartSharp className="ml-2" />
            </NavLink>
          </div>
        ) : (
          <div className="sm:hidden">
            <TiThMenu
              onClick={toggle}
              className="icon navbar-utility-class-icons "
            />
            <div className="hidden"></div>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
