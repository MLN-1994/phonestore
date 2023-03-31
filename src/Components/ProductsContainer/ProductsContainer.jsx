import { useEffect, useState } from "react";
import dataproduct from "../../Data/DataProducts.json"
function ProductsContainer() {

  const [products, setProducts] = useState([])




  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataproduct);
      }, 2000);
    });
  };

  useEffect(() => {

    getDatos()
     .then((res) => {

      setProducts(res)
      console.log(res);
    });
  }, []);


///vas x el mi 39


  return (
    <>
      <div className="">

        <div className="">

          <div className="">
            <img src="" alt="" />
          </div>

          <div className="">
            <p></p>
          </div>

          <div className="">
            <p></p>
          </div>

        </div>

      </div>
    </>
  );
}
export default ProductsContainer;
