import React, { useState } from "react";
import { useCart } from "../../contexts/cart.context";

export default function Formulario() {
  const { setName, setEmail, setClarifications } = useCart();
  const [name, setNameLocal] = useState("");
  const [email, setEmailLocal] = useState("");
  const [clarifications, setClarificationsLocal] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setNameLocal(newName);
    setName(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmailLocal(newEmail);
    setEmail(newEmail);
  };

  const handleClarificationsChange = (e) => {
    const newClarifications = e.target.value;
    setClarificationsLocal(newClarifications);
    setClarifications(newClarifications);
  };

  return (
    <>
    <div className="">

          <div className="my-4 md:px-4 ">
        <label htmlFor="name" className="block text-lg text-zinc-500 font-bold">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>

      <div className="my-4 md:px-4">
        <label htmlFor="email" className="block text-lg text-zinc-500 font-bold">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>

      <div className="my-4 md:px-4">
        <label htmlFor="clarifications" className="block text-lg text-zinc-500 font-bold">
          Aclaraciones:
        </label>
        <textarea
          id="clarifications"
          value={clarifications}
          onChange={handleClarificationsChange}
          className="border border-gray-300 rounded-md px-2 py-1 w-full"
        />
      </div>
    </div>
  
    </>
  );
}
