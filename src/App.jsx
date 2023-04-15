import "./App.css";
import Header from "./Components/Header/Header";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  //min 28:29 rrdom
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
          <Route path="/products/:categoryId" element={<ProductsContainer />} />
          <Route path="/detail " element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
