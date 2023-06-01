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
    
    const addItem = (item) => {
        
        setCart([
            ...cart,
            item
        ])

    }

    const checkout = () => {
     
      
      
        let message = "¡Hola! Quisiera hacer el siguiente pedido: \n\n";
      
        cart.forEach(product => {
          const encodedName = encodeURIComponent(product.name);
          const encodedQuantity = encodeURIComponent("1"); // Aquí puedes agregar la cantidad deseada
          message += `*${encodedName}* x${encodedQuantity} \n`;
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
        checkout
    }
        
    
    


}