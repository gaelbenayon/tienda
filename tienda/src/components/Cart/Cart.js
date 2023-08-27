import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

export default function Cart () {

    const {cart,clearCart,cartItemsQuantity,getTotalPrice} = useContext(CartContext);

    return (
        
        <div className="w-100">
            {cartItemsQuantity > 0 ? <h3 className="text-center text-info">MI CARRITO</h3> : 
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
                    {cartItemsQuantity > 0 &&

                        <li className="p-2 m-4 row border border-info rounded d-flex align-items-center justify-content-between small text-center">
                            <div className="col-12 col-lg-4 d-flex">
                                <span className="   w-100">Cantidad de productos: {cartItemsQuantity}</span>
                            </div>
                            <div className="p-2 col-12 col-lg-3">
                                Total: ${getTotalPrice()}
                            </div>
                            <div className="col-12 col-lg-5 small d-flex">
                                <Link to="/checkout" className="btn btn-info text-light me-2">Terminar compra</Link>
                                <button className="btn btn-info text-light" onClick={clearCart}>Vaciar carrito</button>
                            </div>
                        </li>
                    
                    }
                </ol>    
            </div>
            {/* {cartItemsQuantity > 0 && 
                <div>
                    <span className="small text-end">TOTAL: ${getTotalPrice()}</span>
                    <div className="d-flex justify-content-center">
                        <Link to="/checkout" className="btn btn-outline-info">Terminar compra</Link>
                        <button className="btn btn-outline-info" onClick={clearCart}>Vaciar carrito</button>
                    </div>
                </div>   
            } */}
            <ToastContainer/>
        </div>
       
    )
}