import React from "react";

const PopUp = ({ message }) => {
  return (
    <div className="">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>{message}</p>
       
      </div>
    </div>
  );
};

export default PopUp;
