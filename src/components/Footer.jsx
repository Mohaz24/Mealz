import React from 'react'
import { Link } from "react-router-dom"
import Google from "./SVG/Google.svg"
import AppStore from "./SVG/AppStore.svg"

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:place-items-center sm:grid sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 ">
       <div className="duplicated-utility-class ">
         <h1 className="footer-title-custom-class">Mealz</h1>
         <Link className="leading-6 font-normal text-base not-italic text-white">About Us</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Jobs</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Become a partner</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Join as a driver</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Releases</Link>
       </div>
       <div className="duplicated-utility-class">
         <h1 className="footer-title-custom-class">Support</h1>
         <Link className="leading-6 font-normal text-base not-italic text-white">Contact Us</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Help Center</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Terms of service</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Legal</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Privacy Policy</Link>
       </div>

       <div className="duplicated-utility-class">
         <h1 className="footer-title-custom-class">Follow us</h1>
         <Link className="leading-6 font-normal text-base not-italic text-white">Facebook</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Twitter</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">Instagram</Link>
         <Link className="leading-6 font-normal text-base not-italic text-white">LinkedIn</Link>
       </div>

       <div className="duplicated-utility-class">
         <h1 className="footer-title-custom-class">Download App</h1>
         <img src={Google} alt="google" />
         <img src={AppStore} alt="appstore" />
       </div>
       </div>

       <div className="text-center pb-8">
         <h1 className="footer-title-custom-class pb-4">Mealz</h1>
         <p className="pb-4 text-base text-white font-normal not-italic leading-6">©2023 Mealz | All rights reserved</p>
       </div>
    </footer>
  )

}

export default Footer
