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

    return {
        cart,
        addItem
    }
        
    
    


}