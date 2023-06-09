import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/login.context";
import AddProductForm from "../AddProductForm/AddProductForm";

export default function Admin() {
  const { user } = useContext(LoginContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      setToken(userToken);
    }
  }, [token]);

  if (!token) {
    // If token doesn't exist, don't render anything
    return null;
  }

  return (
    <>
      <div className="flex justify-center">
        <p className="text-xl">
          Bienvenido
          <span className="text-sky-500 text-2xl">{user.email}</span>
        </p>
      </div>

      <div className="">
        <AddProductForm />
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Salir de la cuenta
      </button>
    </>
  );
}
