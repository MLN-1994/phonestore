import { AiOutlineShoppingCart } from 'react-icons/ai';


import React from 'react'
import { useCart } from '../../contexts/cart.context';

export default function CartWidget() {

    const { cart } = useCart();


  return (
    <>
        <a href="" className=' text-4xl text-zinc-600 flex items-center justify-center '>
          <div className="">{cart?.length || 0 }</div>
            <div className="">
              <AiOutlineShoppingCart />
              </div> 
        </a>
    </>
  )
}
