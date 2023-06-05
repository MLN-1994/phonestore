import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/cart.context";

export default function Cart() {
  const { cart, checkout, removeItem } = useCart();


  if (cart.length === 0) {
    return (
      <>
        <div className="">
        
        </div>
        <div className="flex justify-center">
          <p className="text-6xl font-bold  my-32">📣 Carrito vacio</p>
        </div>
      </>
    );
  }

  return (
    <>
   <div className="bg-white mx-auto w-3/4 py-6 my-32 rounded-lg shadow-lg px-16">
  <h2 className="text-3xl font-bold py-6">Tu pedido</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {cart.map((product) => (
      <div className="border shadow-md rounded-lg p-4" key={product.id}>
        <div className="flex justify-center">
          <img className="w-32 h-32 object-contain" src={product.image} alt="" />
        </div>
        <h3 className="text-lg font-semibold my-4 ">{product.name}</h3>
        <p className="font-semibold ">${product.price * product.amount}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Cantidad: {product.amount}</p>
          
          <button 
          onClick={() => removeItem(product.id)}
          className=" text-xl">
            <FaTrash/>
          </button>
        </div>
       
      </div>
      
    ))}
  </div>

 <div className="w-3/4 mx-auto py-8">
        
        <button
          className="py-4 w-1/2 mx-auto bg-multi-color  rounded-md shadow hover:shadow-lg font-semibold text-lg  text-white flex justify-center  "
          onClick={() => checkout()}
        >
          Hacer mi pedido
        </button>
      </div>

</div>


     
      
    </>
  );
}
