import { AiOutlineShoppingCart } from "react-icons/ai";

import React from "react";
import { useCart } from "../../contexts/cart.context";

export default function CartWidget() {
  const { cart, checkout } = useCart();

  const totalProducts = () => {
    let total = 0;

    cart.forEach((item) => {
      total = total + item.amount;
    });

    return total;
  };

  return (
    <>
      <div className="text-4xl flex items-center justify-center">
        <div onClick={() => checkout()} className="relative flex items-center">
          <div className="absolute top-0 right-0 -mt-2 -mr-4 font-semibold text-sm bg-zinc-600 text-white w-6 h-6 flex items-center justify-center rounded-full">
            {totalProducts() || 0}
          </div>
          <div className="text-zinc-600">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
}
