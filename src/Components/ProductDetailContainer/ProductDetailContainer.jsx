import React, { useEffect, useState } from 'react'
import { getItemsById } from '../../Helpers/getDatos'


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

    </>
  )
}
