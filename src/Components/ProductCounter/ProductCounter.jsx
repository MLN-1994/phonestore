import { useState } from "react";

//MINUTO 40:49



const ProductCounter = ({max, amount, setAmount}) => {
  

  function handleIncrement() {
    amount < max && setAmount(amount + 1);
  }

  function handleDecrement() {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  }

  return (
    <div className="grid grid-cols-3 items-center justify-center  text-blue-600">
      <div className="flex justify-center">
      <button
          className="border  p-2 rounded-md font-bold w-10 shadow-md bg-white  border-blue-500 hover:bg-gradient-to-br from-blue-500 to-purple-700 hover:text-white"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <div className="font-medium text-xl p-2 ">{amount}</div>
      </div>
      <div className="flex justify-center">
        <button
          className="border   p-2 rounded-md font-bold w-10 shadow-md  bg-white border-blue-500 hover:bg-gradient-to-br from-blue-500 to-purple-700 hover:text-white"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      
    </div>
  );
};
export default ProductCounter;
