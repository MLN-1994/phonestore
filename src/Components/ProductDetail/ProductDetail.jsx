import { useParams } from "react-router-dom"
import ProductDetailContainer from "../ProductDetailContainer/ProductDetailContainer"


const ProductDetail = () =>{

  const { productId } = useParams();
 
  return <>
    <ProductDetailContainer productId={+productId}/>
  </>
}
export default ProductDetail
