import { useContext, createContext, useState, useEffect } from "react";
import dataproduct from "../Data/DataProducts.json";
import { ProductApi } from "../config/endpoints";

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

 
  const fetchProducts = async () => {
    try {
      const response = await ProductApi.getAll(); // Assuming your API endpoint is defined in ProductApi.js
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getItemById = (id) => {

    return products.find((i) => i.id === id);

  };


  const getProductsByCategory = (categoryId) => {

    return products.filter(product => product.category === categoryId);

  }




  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    getItemById,
    getProductsByCategory,
  };

}
