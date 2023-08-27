import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export default function Cart () {

    const {cart,clearCart,cartItemsQuantity} = useContext(CartContext);

    return (
        
        <div className="w-100">
            {cartItemsQuantity > 0 ? <h3 className="text-center">MI CARRITO</h3> : 
                <div className="text-center">
                    <p>No hay productos en tu carrito :( <br/> ¡Encontrá eso que más te gusta y agregalo!</p>
                    <Link className="btn btn-outline-info" to="/">VER PRODUCTOS</Link>
                </div>
            }
            
            <div>
                <ol>
                    {cart.map(item=>{
                        return (
                            <CartItem key={item.id} product={item}/>
                        )
                    })}
                </ol>    
            </div>
            {cartItemsQuantity > 0 && 
                <div className="d-flex justify-content-center">
                    <Link to="/checkout" className="btn btn-outline-info">Terminar compra</Link>
                    <button className="btn btn-outline-info" onClick={clearCart}>Vaciar carrito</button>
                </div>
            }
        </div>
       
    )
}