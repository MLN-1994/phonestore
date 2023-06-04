import { useEffect, useState } from "react";
import { getItemById } from "../../Helpers/getDatos";
import ProductDetail from "../ProductDetail/ProductDetail";
import { SiMercadopago } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import ProductCounter from "../ProductCounter/ProductCounter";
import { useProduct } from "../../contexts/product.context";
import { useCart } from "../../contexts/cart.context";

const ProductDetailContainer = ({ productId }) => {

  const { getItemById, products } = useProduct();
  const { addItem } = useCart();

  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);

  const addCartItem = (item) =>{

    item.amount = amount;
    addItem(item);

  }


  useEffect(() => {

    const item = getItemById(productId);

    console.log(item)

    setProduct(item);

  }, [products]);

  return (
    <>
      <div className="md:w-3/4 mx-auto items-center flex justify-center">
        {product && (
          <>
            <>
              <div className="">
                <div className="bg-white md:flex m-10 shadow-md rounded-md hover:shadow-2xl">
                  <div className="w-2/3 mx-auto flex justify-center ">
                    <div className="flex items-center">
                      <img className=" " src={product.image} alt="" />
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
                        <p className="text-sm font-thin">
                          Stock: {product.stock}
                        </p>
                      </div>
                      <div className="my-6">
                        <p className="">{product.description}</p>
                      </div>

                      <hr />

                      <div className="mt-6 border rounded-md p-2">
                        <ProductCounter 
                          max={product.stock} 
                          amount={amount}
                          setAmount={setAmount}
                        
                        />

                      </div>
                      <div className="flex justify-center mt-10">
                        <button onClick={ () => { addCartItem(product) } } className="border text-white rounded-md font-bold shadow-md p-2 w-full bg-multi-color">
                          Agregar a carrito
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
