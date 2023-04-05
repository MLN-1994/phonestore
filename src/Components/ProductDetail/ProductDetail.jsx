import React from 'react'

export default function ProductDetail({id, name, image, description, price, stock, category}) {
    
  return (
    <>
        <div className="">
            <div className="">
                <img src={image} alt="" />
            </div>

            <div className="">
               <p className="">{name}</p>
            </div>

            <div className="">
               <p className="">${price}</p>
            </div>

            <div className="">
                <p className="">{description}</p>
            </div>
        </div>
    </>
  )
}
