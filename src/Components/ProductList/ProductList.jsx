import React from 'react'
import SearchImput from '../SearchProduct/SearchImput'

const ProductList = ({ products }) => {
  return (
    <>
    <div className="flex mt-16 px-16">
      <SearchImput/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 my-6">
        {products.map((product) => (
          <div key={product.id} className="">
            <div className="border my-4 mx-4 shadow rounded-md ">
              <div className="">
                
                <div className="flex justify-center w-full my-2">
                  <img className="w-64 h-60 object-cover" src={product.image} alt="" />
                </div>
                <div className="px-2 py-2 flex-grow ">
                  <div className="my-2">
                  <p className="font-bold ">{product.name}</p>
                </div>

                <div className="my-2">
                  <p className="font-semibold">${product.price}</p>
                </div>

                <div className="my-2">
                  <p>{product.description}</p>
                </div>
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