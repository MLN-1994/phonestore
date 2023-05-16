import { useEffect, useState } from "react";
import { getItemById } from "../../Helpers/getDatos";
import ProductDetail from "../ProductDetail/ProductDetail";
import { SiMercadopago } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import ProductCounter from "../ProductCounter/ProductCounter";

const ProductDetailContainer = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getItemById(productId).then((data) => {
      console.log({ data });
      setProduct(data);
    });
  }, [productId]);

  return (
    <>
      <div className="">
        {product && (
          <>
            <>
              <div className="flex items-center justify-center ">
                <div className="bg-white md:flex m-10 shadow-md rounded-md hover:shadow-2xl">
                  <div className="md:w-2/3 flex justify-center ">
                    <div className="h-28  p-4 my-4  lg:absolute">
                      <button className="text-3xl  lg:relative right-60 top-40 text-gray-400">
                        &lt;
                      </button>
                    </div>

                    <div className="flex items-center">
                      <img className="w-96 " src={product.image} alt="" />
                    </div>
                    <div className="h-28 p-4 my-4 lg:absolute">
                      <button className="text-3xl  lg:relative left-60 top-40 text-gray-400">
                        &gt;
                      </button>
                    </div>
                  </div>

                  <div className=" md:w-1/3 my-6 mx-6 rounded-md border shadow-md">
                    <div className="p-2">
                      <div className="">
                        <p className="font-bold text-3xl my-6">
                          {product.name}
                        </p>
                        <hr />
                      </div>
                      <div className="my-6">
                        <p className="font-semibold">${product.price}</p>
                      </div>
                      <div className="">
                        <p className="text-sm font-thin">Stock: {product.stock}</p>
                      </div>
                      <div className="my-6">
                        <p className="">{product.description}</p>
                      </div>

                      <hr />
                      
                      {/* <div className="">
                        <div className="">
                          <p>Formas de pago:</p>
                        </div>
                        <div className="flex gap-2 mb-6 mt-2">
                          <SiMercadopago className="text-4xl" />
                          <BsCash className="text-4xl" />
                        </div>
                      </div> */}
                      <div className="my-4">
                        <ProductCounter max={product.stock}/>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </>
          </>
        )}
      </div>
    </>
  );
};
export default ProductDetailContainer;
