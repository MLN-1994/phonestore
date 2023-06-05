import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubHeader from "./Components/SubHeader/SubHeader";
import { ProvideCart } from "./contexts/cart.context";
import { ProvideProduct } from "./contexts/product.context";
import Cart from "./Components/Cart/Cart";

function App() {
  //1:24 hs rrdom
  return (
    <>
      <ProvideCart>
        <ProvideProduct>
          <BrowserRouter>
            <Header />
            <SubHeader />
            {/* <Banner/> */}
            <Routes>
              <Route path="/" element={<ProductsContainer />} />
              <Route
                path="/products/:categoryId"
                element={<ProductsContainer />}
              />
              <Route path="/detail/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </ProvideProduct>
      </ProvideCart>
    </>
  );
}

export default App;
