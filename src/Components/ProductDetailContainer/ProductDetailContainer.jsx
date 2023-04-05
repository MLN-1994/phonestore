import React, { useEffect, useState } from 'react'
import { getItemsById } from '../../Helpers/getDatos'
import ProductDetail from '../ProductDetail/ProductDetail'



export default function ProductDetailContainer() {

    const [item, setItem] = useState(null)
    console.log(item)
    useEffect(()=>{
        getItemsById(1)
            .then((data) => {
                setItem(data)
            })
    },[])

  return (
    <>
      <div className="">
        {
          item && <ProductDetail {...item}/>
        }
      </div>
    </>
  )
}
