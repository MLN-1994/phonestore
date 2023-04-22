import { useEffect, useState } from "react";
import { getItemById } from "../../Helpers/getDatos";
import ProductDetail from "../ProductDetail/ProductDetail";
import { SiMercadopago } from "react-icons/si";
import {BsCash} from "react-icons/bs"

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
              <div className="flex items-center justify-center">
                <div className="bg-white md:flex border m-10 shadow-md rounded-md">
                  <div className="md:w-2/3 flex justify-center">
                    <img src={product.image} alt="" />
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
                        <p className="font-semibold">Stock: {product.stock}</p>
                      </div>
                      <div className="my-6">
                        <p className="font-semibold">{product.description}</p>
                      </div>
                      <hr />
                      <div className="">
                        <div className=""><p>Formas de pago:</p></div>
                        <div className="flex gap-2 mb-6 mt-2">
                          <SiMercadopago className="text-4xl"/>
                          <BsCash className="text-4xl"/>
                          </div>
                      </div>
                      <div className="">
                        <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md shadow hover:shadow-lg font-semibold text-lg  text-white flex justify-center w-full ">
                          Comprar
                        </button>
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
