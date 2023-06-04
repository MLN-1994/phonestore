import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function LinksToCategories() {
  const location = useLocation();

  return (
    <>
      <div className="">
        <nav className="flex gap-2 md:gap-6 font-sans font-bold text-xl text-zinc-500 ">
          <Link
            className={`${
              location.pathname === "/products/phones"
                ? "bg-gradient-to-br text-transparent bg-clip-text from-blue-500 to-purple-700"
                : ""
            }`}
            to="/products/phones"
          >
            Celulares
          </Link>

          <Link
            className={`${
              location.pathname === "/products/cargadores"
                ? "bg-gradient-to-br text-transparent bg-clip-text from-blue-500 to-purple-700"
                : ""
            }`}
            to="/products/cargadores"
          >
            Cargadores
          </Link>

          <Link
            className={`${
              location.pathname === "/products/fundas"
                ? "bg-gradient-to-br text-transparent bg-clip-text from-blue-500 to-purple-700"
                : ""
            }`}
            to="/products/fundas"
          >
            Fundas
          </Link>

          <Link
            className={`${
              location.pathname === "/products/otros"
                ? "bg-gradient-to-br text-transparent bg-clip-text from-blue-500 to-purple-700"
                : ""
            }`}
            to="/products/otros"
          >
            Otros
          </Link>
        </nav>
      </div>
    </>
  );
}
