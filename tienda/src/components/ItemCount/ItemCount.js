import { useState } from "react";
import cart from "../CartWidget/assets/cart.svg";

export default function ItemCount () {

    const [quantity, setQuantity] = useState(1);

    function handleSumarUnidad() {
        setQuantity(quantity + 1);
    }

    function handleRestarUnidad() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    } 

    function handleAgregarAlCarrito() { 
        console.log(quantity > 0 ? `Se añadieron ${quantity} unidades al carrito` : `Por favor, seleccione al menos 1 unidad`);
    }

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-light" onClick={handleRestarUnidad}>-</button>
            <p>{quantity} unidades</p>
            <button className="btn btn-light" onClick={handleSumarUnidad}>+</button>
            <button className="btn btn-info" onClick={handleAgregarAlCarrito}>
                <img src={cart} alt="carrito"/>
            </button>
        </div>
    )
}