import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubHeader from "./Components/SubHeader/SubHeader";

function App() {


  //1:24 hs rrdom
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader/>
       {/* <Banner/> */}
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          
          <Route path="/products/:categoryId" element={<ProductsContainer />} />
          <Route path="/detail/:productId" element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
