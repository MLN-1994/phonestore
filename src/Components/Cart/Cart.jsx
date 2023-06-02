import React from "react";
import { useCart } from "../../contexts/cart.context";

export default function Cart() {
  const { cart, checkout } = useCart();

  return (
    <>
   <div className="bg-white mx-auto w-3/4 mt-6 rounded-lg shadow-lg p-8">
  <h2 className="text-3xl font-bold mb-6">Tu pedido</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {cart.map((product) => (
      <div className="border shadow-md rounded-lg p-4" key={product.id}>
        <div className="flex justify-center">
          <img className="w-32 h-32 object-contain" src={product.image} alt="" />
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Cantidad: {product.amount}</p>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors">
            Eliminar
          </button>
        </div>
      </div>
    ))}
  </div>

 <div className="w-3/4 mx-auto mt-4">
        <button
          className="py-4 w-1/2 mx-auto bg-gray-900 p-2 rounded-md shadow hover:shadow-lg font-semibold text-lg  text-white flex justify-center  "
          onClick={() => checkout()}
        >
          Hacer mi pedido
        </button>
      </div>

</div>


     
      
    </>
  );
}
