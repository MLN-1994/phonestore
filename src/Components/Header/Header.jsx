import React from 'react'
import CartWidget from '../CartWidget/CartWidget' 
import TitleLogo from '../TitleLogo/TitleLogo'
 

export default function Header() {
  return (
    <>
        <div className="grid grid-cols-12 bg-gradient-to-r from-black  to-gray p-4  ">
          <div className="col-span-10 sm:col-start-2 sm:col-span-4 ">
            <TitleLogo/>
          </div>
          <div className="col-start-11 ">
           <CartWidget/>
          </div>
        </div>
    </>
  )
}
