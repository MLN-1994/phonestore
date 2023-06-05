import { useContext, createContext, useState } from 'react';

const cartContext = createContext({});

export function ProvideCart({ children } ) {
    
    const cart  = useProvideCart();

    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

export const useCart = () => {
    return useContext(cartContext);
};


function useProvideCart() {

    const [cart, setCart] = useState([]);


  

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
      };

      const totalPriceCart = () => {
        return cart.reduce((acc, item) => acc + item.price * item.productCount, 0);
      };
    
    const addItem = (item) => {
        
        setCart([
            ...cart,
            item
        ])

    }
//chekout wsp
    const checkout = () => {
     
        let message = "¡Hola! Quisiera hacer el siguiente pedido: \n\n";
      
        cart.forEach(product => {
          message += `*${product.name}* x${product.amount} \n`;
        });

        message += "\n";
        message += "Muchas gracias"
      
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "542314610301";
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      
        // Aquí puedes hacer algo con la URL, como redireccionar a ella o imprimir en la consola
        console.log(url);

        window.location.href = url;

      };
      

    return {
        cart,
        addItem,
        checkout,
        removeItem,
        totalPriceCart, 
        
    }
        
    
    


}