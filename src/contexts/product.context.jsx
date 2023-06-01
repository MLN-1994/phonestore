import { useContext, createContext, useState, useEffect } from "react";
import dataproduct from "../Data/DataProducts.json";

const productContext = createContext({});

export function ProvideProduct({ children }) {
  const product = useProvideProduct();

  return (
    <productContext.Provider value={product}>
      {children}
    </productContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(productContext);
};

function useProvideProduct() {

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    setProducts(dataproduct);
  };

  const getItemById = (id) => {

    return products.find((i) => i.id === id);

  };


  const getProductsByCategory = (categoryId) => {

    return products.filter(product => product.category === categoryId);

  }




  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    getItemById,
    getProductsByCategory,
  };

}
