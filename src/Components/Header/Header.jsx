import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import TitleLogo from "../TitleLogo/TitleLogo";


export default function Header() {
  return (
    <>
    <div className="mx-auto w-2/3">

         <div className="grid grid-cols-12  my-4  items-center">
        <div className=" col-span-8  ">
          {/* <TitleLogo /> */}
          <Link to={"/"} className="flex items-center ">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-700"> Innovate Store </p>
          <span className="text-2xl">📱</span>
          </Link>
          
        </div>
        
        <div className="col-start-12 ">
          <CartWidget />
        </div>
      </div>
    </div>
   
    </>
  );
}
