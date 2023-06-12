import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/login.context";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../config/endpoints";

const LoginScreen = () => {
  const { login, user } = useContext(LoginContext);
  const [token, setToken] = useState("");

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

    UserApi.login({ username, password })
      .then((response) => {
        const { token } = response.data;
        console.log("Login successful. Token:", token);
        localStorage.setItem("token", token);
        navigateToAdmin("/admin");
      })
      .catch((error) => {
        console.error("Failed to login:", error);
      });
  };

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      setToken(userToken);
    }
  }, []);

  if (token) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold mb-4">¡Ya estás logueado!</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Cerrar sesión
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mx-auto w-2/3 my-16">
        <div className="flex justify-center">
          <p className="text-3xl mb-6 bg-gradient-to-br from-blue-500 to-purple-700 text-transparent bg-clip-text font-bold p-4">
            Login
          </p>
        </div>

        <div className="flex justify-center">
          <form className="w-full max-w-sm">
            <input
              className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={values.username}
              type="username"
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
            />
            <input
              className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={values.password}
              type="password"
              onChange={handleInputChange}
              name="password"
              placeholder="Contraseña"
            />
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-white bg-gradient-to-br from-blue-500 to-purple-700 rounded-md shadow-md hover:from-blue-600 hover:to-purple-800 focus:outline-none"
            >
              Ingresar
            </button>
            <div className="flex justify-center mt-4">
              {user.error && (
                <p className="text-red-500 font-semibold">{user.error} ⚠️</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
