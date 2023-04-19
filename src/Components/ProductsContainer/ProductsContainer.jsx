import { useEffect, useState } from "react";
import getDatos from "../../Helpers/getDatos";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";

function ProductsContainer() {
  const [products, setProducts] = useState([]);



  const {categoryId} = useParams()
  console.log(categoryId)

  

  useEffect(() => {
    getDatos()
      .then((res) => {
        if(categoryId){
          setProducts(res.filter(prod => prod.category === categoryId));
        }else{
          setProducts(res)
        }
      
      
    });
  }, [categoryId]);

  

  return (
    <>  
      <ProductList products={products}/>
    </>
  );
}
export default ProductsContainer;
