import { createContext, useContext, useState } from "react";

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
      (user) => user.email === values.email);

      if(!match){
        setUser({
          email: null,
          logged: false,
          error: "Usuario invalido",
         
        });
        return
      }
      if(match.password === values.password){
        setUser({
          email: match.email,
          logged: true,
          error: null,
         
        });
      } else {
        setUser({
          email: null,
          logged: false,
          error: "password invalido",
         
        });
      }
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
