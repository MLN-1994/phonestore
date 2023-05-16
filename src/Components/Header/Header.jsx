import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import TitleLogo from "../TitleLogo/TitleLogo";


export default function Header() {
  return (
    <>
      <div className="grid grid-cols-12  p-4 items-center">
        <div className=" col-span-2 md:col-span-1 col-start-3 md:col-start-2">
          <TitleLogo />
        </div>
        
        <div className="col-start-10 lg:col-start-11">
          <CartWidget />
        </div>
      </div>
    </>
  );
}
