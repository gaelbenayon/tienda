import { createContext,useState } from "react";

export const CartContext = createContext({
    cartItems: []
})

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const isInCart = (itemId) => {
        return cart.some(e=> e.id == itemId);
    }

    const addItem = (item,quantity) => {
        !isInCart(item.id) ? setCart(prev => [...prev,{...item,quantity}]) : console.log("ya se habia agregado");
    }

    const getCart = () => {
        console.log(cart);
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(e=>e.id != itemId);
        setCart(updatedCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart,setCart,isInCart,addItem,getCart,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}