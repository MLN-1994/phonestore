import { useEffect, useState } from "react";
import ProductCounter from "../ProductCounter/ProductCounter";
import { useProduct } from "../../contexts/product.context";
import { useCart } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const ProductDetailContainer = ({ productId }) => {
  const { getItemById, products } = useProduct();
  const { addItem, isInCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);

  const addCartItem = (item) => {
    item.amount = amount;
    addItem(item);
  };

  useEffect(() => {
    const item = getItemById(productId);

    console.log(item);

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
                      <img className="w-2/3 mx-auto " src={`${import.meta.env.VITE_API_URL}/${product.image}`}/>
                    </div>
                  </div>

                  <div className="my-12 md:mr-6 rounded-md xl:w-2/3  shadow-xl">
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

                      <div className=" rounded-md my-4 w-2/3 mx-auto">
                        {!isInCart(productId) ? (
                          <ProductCounter
                            max={product.stock}
                            amount={amount}
                            setAmount={setAmount}
                          />
                        ) : (
                          <div className="flex justify-center mt-12">
                            <Link className=" " to="/cart">
                              <button className=" rounded-md font-bold shadow-md  p-4  w-full bg-white border bg-multi-color text-white ">
                                Finalizar compra
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                      <div
                        className={`flex justify-center  ${
                          isInCart(productId) ? "hidden" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            addCartItem(product);
                          }}
                          className="  border text-blue-600 border-blue-500 hover:bg-gradient-to-br from-blue-500 to-purple-700 hover:text-white rounded-md font-bold shadow-md py-2 w-full px-4 "
                        >
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
