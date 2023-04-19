import "./App.css";
import Header from "./Components/Header/Header";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  //1:24 hs rrdom
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/products/:categoryId" element={<ProductsContainer />} />
          <Route path="/detail/:productId" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
