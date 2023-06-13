import React, { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function Header() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      setLogged(true);
    }
  }, [logged]);

  return (
    <>
      <div className="mx-auto w-2/3">
        <div className="grid grid-cols-12  my-4  items-center">
          <div className=" col-span-8  ">
            {/* <TitleLogo /> */}
            <Link to={"/"} className="flex items-center ">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-700">
                {" "}
                Innovate Store{" "}
              </p>
              <span className="text-2xl">📱</span>
            </Link>
          </div>

          {logged && (
            <>
              <Link
                to="/admin"
                className="fixed z-10 right-4 bottom-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Agregar productos
              </Link>

              <Link
                to="/pedidos"
                className="fixed z-10 right-4 bottom-16 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Pedidos recientes
              </Link>
            </>
          )}

          <div className="col-start-12 ">
            <CartWidget />
          </div>
        </div>
      </div>
    </>
  );
}
