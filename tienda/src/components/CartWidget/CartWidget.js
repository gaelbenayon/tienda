import carrito from "./assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {

    const {cartItemsQuantity} = useContext(CartContext);

    return (
        cartItemsQuantity > 0 &&
        <div className="p-2">
            <Link to="cart" type="button" className="btn btn-outline-info position-relative">
                <img src={carrito} alt="carrito"/>
                <span id="campoCantidadCarrito" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                    {cartItemsQuantity}
                    <span className="visually-hidden">productos agregados</span>
                </span>
            </Link>
        </div>
    )
}