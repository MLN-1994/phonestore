import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/login.context";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../config/endpoints";

const LoguinScreen = () => {
  const { login, user } = useContext(LoginContext);

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
    // login(values);

    const { username, password } = values;

    UserApi.login({ username, password })
      .then((response) => {
        const { token } = response.data;
        console.log("Login successful. Token:", token);
        // Handle success response
        // For example, you can store the token in local storage or set it as a cookie
        localStorage.setItem("token", token);
        navigateToAdmin("/admin");
      })
      .catch((error) => {
        console.error("Failed to login:", error);
        // Handle error response
        // For example, you can display an error message to the user
      });
  };

  useEffect(() => {
    if (user.logged) {
      navigateToAdmin("/admin");
    }
  }, [user.logged, navigateToAdmin]);

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
              value={values.username}
              type="username"
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
              placeholder="Contraseña"
            />
            <button
              onClick={handleSubmit}
              className="font-bold border border-sky-500 hover:bg-sky-500 hover:text-white py-2 rounded-md shadow-md"
            >
              Ingresar
            </button>
            <div className="flex justify-center">
              {user.error && (
                <p className="text-red-500 text-lg font-semibold">
                  {user.error} ⚠️
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoguinScreen;
