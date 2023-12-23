import React from "react";
import Bg from "../assets/Bg.jpg";
import Mobile from "../assets/Mobile.png";
import Naruto from "./SVG/Naruto.svg";
import Wrapper from "./SVG/Wrapper.svg";
import Tick from "./SVG/Tick.svg";
import Google from "./SVG/Google.svg";
import AppStore from "./SVG/AppStore.svg";

function Nav() {
  return (
    <nav>
      <div className="nav-utility-class-bg flex flex-col items-center justify-center p-10">
        <div
          className="nav-utility-class-ct text-center bg-white w-11/12 py-2 px-8 
           sm:w-3/4 sm:relative  md:w-7/12 lg:w-6/12 lg:py-5"
        >
          <p
            className="navbar-utility-class-info nav-utility-class-info-sm leading-loose 
        font-black lg-leading-loose lg:text-5xl"
          >
            Your favorite
            <span
              className="nav-utility-class-title capitalize leading-normal font-normal
          not-italic nav-utility-class-info-sm lg:text-5xl lg:leading-loose"
            >
              {" "}
              Mealz{" "}
            </span>{" "}
            delivered.
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          className="absolute right-10 top-31 md:w-24 lg:w-32"
          src={Naruto}
          alt="naruto"
        />
        <img
          className="absolute left-61 top-56 sm:top-64 md:top-48 md:w-32 lg:absolute 
          lg:top-36 lg:w-48"
          src={Wrapper}
          alt="wrapper"
        />

        <div
          className="navbar-utility-class-logo flex flex-col items-center relative justify-center
          sm:flex sm:flex-row md:flex-row md:justify-center md:space-x-6 pt-5"
        >
          <img className="w-36 mt-0 md:w-30" src={Mobile} alt="mobile" />
          <ul className="mt-4  sm:pl-24  md:pl-30 lg:pl-32">
            <div className="nav-utility-class-app items-start mb-10">
              <h1 className="mt-7 pl-20 sm:pl-0 font-sans not-italic text-center text-lg font-black leading-normal">
                Download the App
              </h1>
            </div>
            <div className="space-y-3  mr-0  font-sans font-normal leading-normal">
              <div className="nav-utility-class-app space-x-3">
                <img src={Tick} alt="compeleted" />
                <li>Order now or schedule a delivery time.</li>
              </div>

              <div className="nav-utility-class-app space-x-3">
                <img src={Tick} alt="compeleted" />
                <li>Track your order.</li>
              </div>

              <div className="nav-utility-class-app space-x-3">
                <img src={Tick} alt="compeleted" />
                <li>Exclusive offers.</li>
              </div>

              <div className="nav-utility-class-app space-x-3">
                <img src={Tick} alt="compeleted" />
                <li>Order now or schedule a delivery time.</li>
              </div>
            </div>
            <div className="nav-utility-class-app my-10 space-x-7">
              <img src={Google} alt="google-play-store-logo" />
              <img src={AppStore} alt="app-store-logo" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
