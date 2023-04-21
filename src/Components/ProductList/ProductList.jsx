import React from "react";
import { Link } from "react-router-dom";


const ProductList = ({ products, category }) => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
        {products.map((product) => (
          <div key={product.id} className="">
            <div className="border bg-neutral-50 p-4 my-2 mx-6 shadow rounded-md ">
              <div className="">
                <div className="flex justify-center w-full my-2">
                  <img
                    className="w-64 h-60 object-cover"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="px-2 py-2 flex-grow ">
                  <div className="my-2">
                    <p className="font-bold text-xl ">{product.name}</p>
                  </div>

                  <div className="my-2">
                    <p className="font-semibold">${product.price}</p>
                  </div>

                
                </div>
              </div>
              <div className="my-4 p-2">
                <Link className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md shadow hover:shadow-lg font-semibold text-lg  text-white flex justify-center w-full ">
                  Ver mas
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductList;
