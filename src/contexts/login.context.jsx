import { createContext, useState } from "react";

const mockUser = [
  {
    email: "mariano@gmail.com",
    password: "123",
  },
  {
    email: "marasd@gmail.com",
    password: "123",
  },
];

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  
  const [user, setUser] = useState({
    email: "",
    logged: false,
    error: null,
    
  });
  console.log(user)

  const login = (values) => {
    const match = mockUser.find(
      (user) => user.email === values.email && user.password === values.password
    );

    match
      ? setUser({
          email: match.email,
          logged: true,
          error: null,
          
        })
      : setUser({
          email: null,
          logged: false,
          error: "Datos invalidos",
         
        });

  };

  const logout = () =>{
    setUser({
        email: "",
        logged: false,
        error: null,
    })
  }

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
