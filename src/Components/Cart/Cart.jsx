import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/cart.context";
import Formulario from "../FormChekout/FormChekout";
export default function Cart() {
  const { cart, checkout, removeItem, totalPriceCart } = useCart();



  if (cart.length === 0) {
    return (
      <>
        <div className="flex justify-center">
          <p className="text-6xl font-bold  my-32">📣 Carrito vacio</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-white mx-auto w-3/4 py-6 my-10 rounded-lg shadow-lg px-4">
        <h2 className="text-3xl text-zinc-600 font-bold py-6">Tu pedido</h2>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div className="border shadow-md rounded-lg p-4" key={product.id}>
              <div className="flex justify-center">
                <img
                  className="w-32 h-32 object-contain"
                  src={`${import.meta.env.VITE_API_URL}/${product.image}`}
                  alt=""
                />
              </div>
              <h3 className="text-lg font-semibold my-4 ">{product.name}</h3>
              <p className="font-semibold ">
                ${product.price * product.amount}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-zinc-600">Cantidad: {product.amount}</p>

                <button
                  onClick={() => removeItem(product.id)}
                  className=" text-xl text-red-400"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="font-bold flex justify-end  text-zinc-600 text-xl my-4 px-4">
          Total: ${totalPriceCart()}
        </div>

        <Formulario/>
        <div className="">
          <button
            className="p-2 md:p-4   text-blue-600  mx-auto bg-white border border-blue-500 hover:bg-gradient-to-br from-blue-500 to-purple-700 hover:text-white rounded-md shadow hover:shadow-lg text-lg font-bold flex justify-center  "
            onClick={() => checkout()}
          >
            Hacer mi pedido
          </button>
        </div>
      </div>
    </>
  );
}
