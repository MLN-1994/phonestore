import { AiOutlineShoppingCart } from "react-icons/ai";

import React from "react";
import { useCart } from "../../contexts/cart.context";

export default function CartWidget() {
  
  const { cart, checkout } = useCart();

  const totalProducts = () => {

    let total = 0;

    cart.forEach(item => {
      
      total = total + item.amount;

    });

    return total;

  }

  return (
    <>
      <div
        onClick={() => checkout()}
        className=" text-4xl text-zinc-600 flex items-center justify-center "
      >
        <div className="">{totalProducts() || 0}</div>
        <div className="">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </>
  );

}
