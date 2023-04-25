import { useState } from "react"


const ProductCounter = () =>{
    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(count + 1);
      }
    
      function handleDecrement() {
        if (count > 0) { 
          setCount(count - 1);
        } else { 
          setCount(0);
        }
      }
    
      return (
        <div className="grid grid-cols-4 items-center   p-2">
          <button className="border  text-white p-2 rounded-md font-bold w-10 shadow-md  bg-gray-800 hover:bg-gray-700" onClick={handleIncrement}>+</button>
          <div className="font-medium text-xl p-2">{count}</div>
          <button className="border text-white p-2 rounded-md font-bold w-10 shadow-md  bg-gray-800 hover:bg-gray-700" onClick={handleDecrement}>-</button>
        </div>
      );
}
export default ProductCounter