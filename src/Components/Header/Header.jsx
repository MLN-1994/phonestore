import React from 'react'
import SearchImput from "../SearchProduct/SearchImput"
import CartWidget from '../CartWidget/CartWidget'
 import LinksToCategories from "../LinksToCategories/LinksToCategories"
import TitleLogo from '../TitleLogo/TitleLogo'
 

export default function Header() {
  return (
    <>
        <div className="bg-gray-700 p-4 flex justify-around items-center">
          <div className="">
            <TitleLogo/>
          </div>
          {/* <div className="">
            <SearchImput />
          </div> */}
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
