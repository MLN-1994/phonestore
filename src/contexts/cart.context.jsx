import { useContext, createContext, useState } from "react";

const cartContext = createContext({});

export function ProvideCart({ children }) {
  const cart = useProvideCart();

  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

export const useCart = () => {
  return useContext(cartContext);
};

function useProvideCart() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clarifications, setClarifications] = useState("");

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPriceCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const setNameValue = (customerName) => {
    setName(customerName);
  };

  const setEmailValue = (customerEmail) => {
    setEmail(customerEmail);
  };

  const setClarificationsValue = (customerClarifications) => {
    setClarifications(customerClarifications);
  };
  const checkout = () => {
    let message = "¡Hola! Quisiera hacer el siguiente pedido: \n\n";

    cart.forEach((product) => {
      message += `*${product.name}* x${product.amount} \n`;
    });
    
    message += "\n";
    message += "Nombre: " + name + "\n";
    message += "Correo Electrónico: " + email + "\n";
    message += "Aclaraciones: " + clarifications + "\n";
    message += "Muchas gracias";

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "542314610301";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    console.log(url);
    window.location.href = url;
  };

  return {
    cart,
    addItem,
    checkout,
    removeItem,
    totalPriceCart,
    isInCart,
    setName: setNameValue,
    setEmail: setEmailValue,
    setClarifications: setClarificationsValue
  };
}
