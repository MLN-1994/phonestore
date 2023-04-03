import { useEffect, useState } from "react";
import getDatos from "../../Helpers/getDatos";

function ProductsContainer() {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    getDatos()
    .then((res) => {
      setProducts(res);
      
    });
  }, []);

  
  ///vas x 1hs 09min

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
  );
}
export default ProductsContainer;
