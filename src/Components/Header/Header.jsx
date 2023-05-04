import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import TitleLogo from "../TitleLogo/TitleLogo";

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-12  p-4 items-center">
        <div className=" col-start-3">
          <TitleLogo />
        </div>
        <div className="col-start-11 ">
          <CartWidget />
        </div>
      </div>
    </>
  );
}
