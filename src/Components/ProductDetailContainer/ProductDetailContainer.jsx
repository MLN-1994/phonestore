import { useEffect, useState } from "react";
import { getItemById } from "../../Helpers/getDatos";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = ({ productId }) => {

  const [product, setProduct] = useState(null);


  useEffect(() => {

    getItemById(productId).then((data) => {

      console.log({ data })
      setProduct(data);
    });

  }, [productId]);

  return (
    <>
      <div className="">
        {product && (
          <>
            <>
              <div className="">
                <div className="">
                  <img src={product.image} alt="" />
                </div>
                <div className="">
                  <p className="">{product.name}</p>
                </div>
                <div className="">
                  <p>{product.price}</p>
                </div>
                <div className="">
                  <p>{product.description}</p>
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
