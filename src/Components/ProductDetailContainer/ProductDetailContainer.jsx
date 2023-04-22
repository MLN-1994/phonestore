import { useEffect, useState } from "react";
import { getItemById } from "../../Helpers/getDatos";
import ProductDetail from "../ProductDetail/ProductDetail";

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
              <div className="bg-white flex">
                <div className="w-2/3 flex justify-center">
                  <img src={product.image} alt="" />
                </div>
                <div className="bg-red-300 w-1/3">
                  <div className="p-2">
                    <div className="">
                    <p className="font-bold text-3xl my-6">{product.name}</p>
                  </div>
                  <div className="">
                    <p>${product.price}</p>
                  </div>
                  <div className="">
                    <p>{product.description}</p>
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
