import React, { useContext } from "react";
import { LoginContext } from "../../contexts/login.context";
import AddProductForm from "../AddProductForm/AddProductForm";

export default function Admin() {
  const { user } = useContext(LoginContext);

  return (
    <>
      <div className="flex justify-center">
        <p className="text-xl">
          Bienvenido
          <span className="text-sky-500 text-2xl">{user.email}</span>
        </p>
      </div>

      <div className="">
        <AddProductForm/>
      </div>
    </>
  );
}
