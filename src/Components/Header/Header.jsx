import React from 'react'
import SearchImput from "../SearchProduct/SearchImput"
import CartWidget from '../CartWidget/CartWidget'
 import LinksToCategories from "../LinksToCategories/LinksToCategories"

export default function Header() {
  return (
    <>
        <div className="bg-gray-700 p-4 flex justify-around items-center">
          <div className="">
            <SearchImput />
          </div>
          <div className="">
          <LinksToCategories />
          </div>
          <div className="">
           <CartWidget/>
          </div>
            
             
           
        </div>
    </>
  )
}
