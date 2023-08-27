import { createContext,useEffect,useState } from "react";
import {toast} from "react-toastify";

export const CartContext = createContext({
    cartItems: []
})

export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const [cartItemsQuantity,setCartItemsQuantity] = useState(0);
    
    const [updateNeeded,setUpdateNeeded] = useState(false);

    useEffect(()=>{
        let cartQuantity = 0;
        cart.map(item=>{
            return cartQuantity += item.quantity
        })
        setCartItemsQuantity(cartQuantity);
        setUpdateNeeded(false);
    },[cart,updateNeeded])

    const isInCart = (itemId) => {
        return cart.some(e=> e.id == itemId);
    }

    const addItem = (item,quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev,{...item,quantity}]);
        } else {
            let selection = cart.find(e=>e.id == item.id);
            let selectionIndex = cart.findIndex(e=>e == selection);
            cart[selectionIndex].quantity += quantity;
            setUpdateNeeded(true);
        }
    }

    const getCart = () => {
        return cart
    }

    const getTotalPrice = () => {
        return cart.reduce((ac,item) => ac + (item.quantity * item.price),0).toFixed(2)
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(e=>e.id != itemId);
        setCart(updatedCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const notifyRemovedItem = () => {
        toast.success(`Eliminaste el producto del carrito`, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const notifyWrongOrder = () => {
        toast.error(`Hubo un problema generando su orden. Verifique haber ingresado datos válidos`, {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <CartContext.Provider value={{cart,setCart,isInCart,addItem,getCart,removeItem,clearCart,getTotalPrice,cartItemsQuantity,notifyRemovedItem,notifyWrongOrder}}>
            {children}
        </CartContext.Provider>
    )
}