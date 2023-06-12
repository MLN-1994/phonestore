import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../config/endpoints";

const Register = () => {
  const navigateToAdmin = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = values;

    UserApi.register({ username, password })
      .then((response) => {
        console.log("Registration successful.");
        // Handle success response
        // For example, you can display a success message or navigate to a success page
        navigateToAdmin("/success");
      })
      .catch((error) => {
        console.error("Failed to register:", error);
        // Handle error response
        // For example, you can display an error message to the user
      });
  };

  return (
    <>
      <div className="mx-auto w-2/3 my-32 bg-zinc-300 py-12 rounded-md shadow">
        <div className="flex justify-center">
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-sky-800 font-bold p-4 ">
            Register
          </p>
        </div>

        <div className=" flex justify-center">
          <form
            className="border flex flex-col gap-6  bg-white p-8 rounded-md shadow-md"
            action=""
          >
            <input
              className="px-12 py-4 bg-slate-100 shadow-md"
              value={values.username}
              type="text"
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
            />
            <input
              className="px-12 py-4 bg-slate-100 shadow-md"
              value={values.password}
              type="password"
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
            />
            <button
              onClick={handleSubmit}
              className="font-bold border border-sky-500 hover:bg-sky-500 hover:text-white py-2 rounded-md shadow-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
