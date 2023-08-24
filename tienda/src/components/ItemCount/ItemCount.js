import "./style.css";
import { useContext, useState } from "react";
import cartIcon from "../CartWidget/assets/cart.svg";
import { CartContext } from "../../context/CartContext";

export default function ItemCount ({...item}) {

    const [quantity, setQuantity] = useState(1);

    function handleSumarUnidad() {
        setQuantity(quantity + 1);
    }

    function handleRestarUnidad() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    } 

    const {addItem,getCart} = useContext(CartContext);

    function handleAgregarAlCarrito(...itemSeleccionado) { 
        console.log(quantity > 0 ? `Se añadieron ${quantity} unidades al carrito` : `Por favor, seleccione al menos 1 unidad`);
        addItem(itemSeleccionado,quantity);
        getCart();
    }

    return (
        <div className="d-flex align-items-center ItemCount">
            <button className="btn btn-outline-info btn-light" onClick={handleRestarUnidad}>-</button>
            <p className="ps-2 pe-2 mb-0">{quantity}</p>
            <button className="btn btn-outline-info btn-light" onClick={handleSumarUnidad}>+</button>
            <button title="Agregar al carrito" className="ms-3 btn btn-info" onClick={()=>handleAgregarAlCarrito(item,quantity)}>
                <img src={cartIcon} alt="carrito"/>
            </button>
        </div>
    )
}