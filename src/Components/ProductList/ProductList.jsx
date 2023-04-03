import React from 'react'

const ProductList = ({products}) => {
  return (
    <>
    <div className=" h-full">
        {products.map((product) => (
          <div key={product.id} className="">
            <div className="border ">
              <div className="p-4 grid grid-cols-6">
                
                <div className="">
                  <img className="w-24" src={product.image} alt="" />
                </div>

                <div className="">
                  <p className="font-bold ">{product.name}</p>
                </div>

                <div className="">
                  <p className="font-semibold">${product.price}</p>
                </div>

                <div className="col-span-3">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
  )
}
export default ProductList