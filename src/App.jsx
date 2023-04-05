import Navbar from "../src/Components/Navbar/Navbar";
import "./App.css";
import ProductDetailContainer from "./Components/ProductDetailContainer/ProductDetailContainer";
import Header from "./Components/Header/Header"
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";

function App() {
  return (
    <>
    <Header/>
      <div className="grid grid-cols-12 h-screen ">
        {/* <div className="col-span-4 md:col-span-2 bg-gray-200 shadow-md"><Navbar/></div> */}
        <div className="col-span-12 ">
          <ProductsContainer />
        </div>
      </div>
      {/* <ProductDetailContainer/> */}
    </>
  );
}

export default App;
