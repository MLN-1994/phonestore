import { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  }

  return (
    <div className="grid grid-cols-3 items-center justify-center  ">
      <div className="flex justify-center">
      <button
          className="border text-white p-2 rounded-md font-bold w-10 shadow-md  bg-gray-800 hover:bg-gray-700"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <div className="font-medium text-xl p-2 ">{count}</div>
      </div>
      <div className="flex justify-center">
        <button
          className="border  text-white p-2 rounded-md font-bold w-10 shadow-md  bg-gray-800 hover:bg-gray-700"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ProductCounter;
