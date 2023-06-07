import { useState } from "react";

const LoguinScreen = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="mx-auto w-2/3 my-32 bg-zinc-300 py-12 rounded-md shadow">
        <div className="flex justify-center">
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-800 font-bold p-4 ">
            Login
          </p>
        </div>

        <div className=" flex justify-center">
          <form
            className="border flex flex-col gap-6  bg-white p-8 rounded-md shadow-md"
            action=""
          >
            <input
              className="px-12 py-4 bg-slate-100 shadow-md"
              value={values.email}
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
            />
            <input
              className="px-12 py-4 bg-slate-100 shadow-md"
              value={values.password}
              type="password"
              onChange={handleInputChange}
              name="password"
              placeholder="Contraseña"
            />
            <button
              onClick={handleSubmit}
              className="font-bold border border-sky-500 hover:bg-sky-500 hover:text-white py-2 rounded-md shadow-md"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoguinScreen;
