import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/login.context";
import { useNavigate } from "react-router-dom";
import AddProductForm from "../AddProductForm/AddProductForm";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function Admin() {
  const { user } = useContext(LoginContext);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      setToken(userToken);
    } else {
      navigate("/loguin");
    }
  }, [token]);

  if (!token) {
    // If token doesn't exist, don't render anything

    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/loguin");
  };

  return (
    <>
      <div className="my-4">
        <div className="w-3/4 mx-auto flex justify-end px-12">
          <button
            
            onClick={handleLogout}
          >
            <RiLogoutBoxFill className="text-4xl text-zinc-500"/>
           
          </button>
        </div>
        <AddProductForm />
      </div>
    </>
  );
}
