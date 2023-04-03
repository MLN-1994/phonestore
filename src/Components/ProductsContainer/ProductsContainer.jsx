import { useEffect, useState } from "react";
import getDatos from "../../Helpers/getDatos";
import ProductList from "../ProductList/ProductList";

function ProductsContainer() {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    getDatos()
    .then((res) => {
      setProducts(res);
      
    });
  }, []);

  

  return (
    <>
      <ProductList products={products}/>
    </>
  );
}
export default ProductsContainer;
