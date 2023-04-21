import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LinksToCategories() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <div className="">
        <nav className="flex gap-2 md:gap-6 text-white font-bold">
       
          <Link
            className={activeLink === 0 ? "border-b-2  border-gray-400  " : ""}
            onClick={() => handleLinkClick(0)}
            to="/products/phones"
          >
            Celulares
          </Link>
          <Link
            className={activeLink === 1 ? "border-b-2  border-gray-400   " : ""}
            onClick={() => handleLinkClick(1)}
            to="/products/cargadores"
          >
            Cargadores
          </Link>
          <Link
            className={activeLink === 2 ? "border-b-2  border-gray-400   " : ""}
            onClick={() => handleLinkClick(2)}
            to="/products/fundas"
          >
            Fundas
          </Link>
          <Link
            className={activeLink === 3 ? "border-b-2  border-gray-400    " : ""}
            onClick={() => handleLinkClick(3)}
            to="/products/otros"
          >
            Otros
          </Link>
        </nav>
      </div>
    </>
  );
}
