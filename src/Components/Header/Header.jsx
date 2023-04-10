import React from 'react'
import SearchImput from "../SearchProduct/SearchImput"
import CartWidget from '../CartWidget/CartWidget'
 import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <>
        <div className="bg-gray-700 p-4 flex justify-between">
            <SearchImput/>
             <Navbar/> 
            <CartWidget/>
        </div>
    </>
  )
}
