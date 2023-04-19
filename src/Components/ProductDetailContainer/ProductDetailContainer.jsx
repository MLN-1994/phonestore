import React, { useEffect, useState } from 'react'
import { getItemsById } from '../../Helpers/getDatos'
import ProductDetail from '../ProductDetail/ProductDetail'




export default function ProductDetailContainer  ({id}) {

    const [item, setItem] = useState(null)

    


    console.log(item)


    useEffect(()=>{
        getItemsById(id)
        console.log(id)
            .then((data) => {
                setItem(data)
            })
            
    },[id])

    
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
