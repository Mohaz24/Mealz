import React from 'react'
import { Link } from "react-router-dom"
import Partners from "./SVG/Partners.svg"
import Drivers from "./SVG/Drivers.svg"
import Jobs from "./SVG/Jobs.svg"
import Burger from "./SVG/Burger.svg"
import Pizza from "./SVG/Pizza.svg"
import Hotdog from "./SVG/Hotdog.svg"
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import useToggleHook  from "./Hooks/useToggleHook"

function Main() {
  const [show1, toggle1] = useToggleHook(false)
  const [show2, toggle2] = useToggleHook(false)
  const [show3, toggle3] = useToggleHook(false)

  return (
    <main>
      <section className="main-utility-class-bg py-16 px-6">
        <div className="flex flex-col justfiy-center items-center relative">
        <h1 className="text-4xl pb-10 font-black text-white leading-normal not-italic">Join Us</h1>
        <img className="absolute right-3 lg:w-56 lg:right-16" src={Burger} alt="burger" />
        
        <div className="flex flex-col self-stretch sm:flex sm:flex-row sm:gap-10 sm:justify-center
        md:flex md:flex-row md:gap-14 md:justify-center md:items-center 
        lg:flex lg:flex-row lg:gap-14 lg:self-auto">
        <div>
          <Link className="main-utitlity-class-ct sm:flex sm:flex-col sm:items-center text-center
           md:flex md:flex-col md:items-center" to="/partners"> 
            <img src={Partners} alt="partners" className="main-utility-class-img"/>
            <h2 className="text-2xl text-black ml-7 leading-normal not-italic 
            font-normal sm:font-black sm:text-3xl sm:ml-0">Partners</h2>
            </Link>
        </div>
          
        <div>
        <Link className="main-utitlity-class-ct sm:flex sm:flex-col sm:items-center
        md:flex md:flex-col md:items-center " to="/"> 
            <img src={Drivers} alt="drivers" className="main-utility-class-img" />
            <h2 className="text-2xl text-black ml-7 leading-normal not-italic 
            font-normal sm:font-black sm:text-3xl sm:ml-0">Drivers</h2>
          </Link>
        </div>

        <div>
        <Link className="main-utitlity-class-ct sm:flex sm:flex-col sm:items-center
        md:flex md:flex-col md:items-center " to="/jobs"> 
            <img src={Jobs} alt="jobs"  className="main-utility-class-img"  />
            <h2 className="text-2xl text-black  ml-7 leading-normal not-italic 
            font-normal sm:font-black sm:text-3xl sm:ml-0">Jobs</h2>
          </Link>
        </div>
        </div>
        </div>
      </section>
      <section className="bg-gray-100 pt-2 relative cloned-utlity-p-class 
        sm:flex sm:flex-col sm:items-center lg:flex lg:flex-col lg:items-center">
        <div className="pb-10 ">
        <img className="absolute bottom-13 sm:absoulte sm:top-5 sm:left-2
        sm:w-36 sm:h-36 lg:w-56 lg:h-56" src={Pizza} alt="pizza" />
        <h1 className="font-black not-italic text-center font-sans text-4xl pt-9">FAQ</h1>
        </div>
        
        <div className="p-8 sm:p-6 mt-4 bg-white  w-full sm:w-4/5 lg:w-6/12 ">
           <div className="flex items-center justify-between 
           ">
           <h2 className="font-medium text-lg leading-normal not-italic">What is Mealz about?</h2>
           {
            show1 ? 
            <FaMinus onClick={toggle1} className="icon "/> 
            : <FaPlus onClick={toggle1} className="icon" />
           }
           </div>
           {show1 &&  <p className="text-base text-start pt-5 leading-normal not-italic">Mealz is an online food delivery service.</p> }
         </div>
      

         <div className="p-8 sm:p-6 mt-4 bg-white w-full sm:w-4/5  lg:w-6/12 ">
           <div className="flex items-center justify-between self-stretch">
           <h2 className="font-medium text-lg leading-normal not-italic">What are the accepted payment methods?</h2>
           {
            show2 ? 
            <FaMinus onClick={toggle2} className="icon"/> 
            :<FaPlus onClick={toggle2} className="icon" />
           }
           </div>
           {show2 && <p className="text-base text-start pt-5 leading-normal not-italic">We accept online payments & cash on delivery</p>}
         </div>
         <div className="p-8 sm:p-6 mt-4 bg-white w-full sm:w-4/5  lg:w-6/12 ">
           <div className="flex items-center justify-between self-stretch">
           <h2 className="font-medium text-lg leading-normal not-italic">What are Mealz working hours?</h2>
           {
            show3 ? 
            <FaMinus onClick={toggle3} className="icon"/> 
            :<FaPlus onClick={toggle3} className="icon" />
           }
           </div>
           {show3 &&  <p className="text-base pt-5 leading-normal not-italic">Our office hours are from 8 am to 4 pm, everyday!</p>}
         </div>

         <div className="p-16">
         <img className="absolute bottom-1 right-10 md:w-36 md:h-36 lg:w-56 lg:h-56" src={Hotdog} alt="hotdog" />
         <p className="text-center text-xs font-light leading-normal not-italic">Got another question? We're here to help! <br /> 
         Email us at <span className="underline">example@mealz.com</span></p>
        
         </div>
      </section>
     
    </main>
  )
}

export default Main
