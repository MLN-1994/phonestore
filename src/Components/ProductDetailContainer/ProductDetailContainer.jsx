import { useEffect, useState } from "react";
import ProductCounter from "../ProductCounter/ProductCounter";
import { useProduct } from "../../contexts/product.context";
import { useCart } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const ProductDetailContainer = ({ productId }) => {
  const { getItemById, products } = useProduct();
  const { addItem, isIncart } = useCart();
  console.log(isIncart(productId));
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
              <div className="md:my-16">
                <div className="bg-white md:flex m-10 shadow-md rounded-md hover:shadow-2xl">
                  <div className="w-2/3 mx-auto flex justify-center ">
                    <div className="flex items-center">
                      <img className=" " src={product.image} alt="" />
                    </div>
                  </div>

                  <div className="my-12 mx-4 rounded-md border shadow-md">
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

                      <div className=" rounded-md my-4">
                        {!isIncart(productId) ? (
                          <ProductCounter
                            max={product.stock}
                            amount={amount}
                            setAmount={setAmount}
                          />
                        ) : (
                          <div className="flex justify-center mt-12">
                            <Link className=" " to="/cart">
                              <button className=" rounded-md font-bold shadow-md py-2 px-4 w-full bg-white border border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white ">
                                Finalizar compra
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                      <div
                        className={`flex justify-center  ${
                          isIncart(productId) ? "hidden" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            addCartItem(product);
                          }}
                          className=" bg-white border border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white rounded-md font-bold shadow-md py-2 w-full px-4 "
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
