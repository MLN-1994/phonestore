import { useEffect, useState } from "react";
import getDatos from "../../Helpers/getDatos";
import ProductList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/product.context";

function ProductsContainer() {
  const { products, getProductsByCategory } = useProduct();

  const { categoryId } = useParams();

  const productsList = categoryId
    ? getProductsByCategory(categoryId)
    : products;

  return (
    <>
      <ProductList products={productsList} />
    </>
  );
}
export default ProductsContainer;
