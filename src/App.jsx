import "./App.css";
import Header from "./Components/Header/Header";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
