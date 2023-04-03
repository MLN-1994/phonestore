import { useEffect, useState } from "react";
import dataproduct from "../../Data/DataProducts.json";

function ProductsContainer() {
  const [products, setProducts] = useState([]);

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataproduct);
      }, 2000);
    });
  };

  useEffect(() => {
    getDatos().then((res) => {
      setProducts(res);
      // console.log(res);
    });
  }, []);

  console.log(products);
  ///vas x 1hs 09min

  return (
    <>
      <div className=" h-full">
        {products.map((product) => (
          <div className="">
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
  );
}
export default ProductsContainer;
