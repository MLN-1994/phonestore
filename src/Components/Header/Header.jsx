import React from 'react'
import CartWidget from '../CartWidget/CartWidget' 
import TitleLogo from '../TitleLogo/TitleLogo'
 

export default function Header() {
  return (
    <>
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-black p-4 flex justify-around items-center">
          <div className="">
            <TitleLogo/>
          </div>
          <div className="">
           <CartWidget/>
          </div>
        </div>
    </>
  )
}
