import Navbar from "../src/Components/Navbar/Navbar"
import './App.css'
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer"


function App() {
  

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4 md:col-span-2 bg-gray-200"><Navbar/></div>
      <div className="col-span-8"><ProductsContainer/></div>
    </div>
  )
}

export default App
