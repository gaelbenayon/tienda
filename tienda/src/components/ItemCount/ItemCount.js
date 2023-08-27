import "./style.css";
import { useContext, useState } from "react";
import cartIcon from "../CartWidget/assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';

export default function ItemCount ({...item}) {

    const [quantity, setQuantity] = useState(1);

    function handleSumarUnidad() {
        setQuantity(quantity + 1);
    }

    function handleRestarUnidad() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    } 

    const {addItem} = useContext(CartContext);

    function handleAgregarAlCarrito(itemSeleccionado) { 
        if (quantity > 0) {
            addItem(itemSeleccionado,quantity);
            toast.success(`Agregaste ${quantity} unidad(es)`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    return (
        <div className="d-flex align-items-center ItemCount">
            <button className="btn btn-outline-info btn-light" onClick={handleRestarUnidad}>-</button>
            <p className="ps-2 pe-2 mb-0">{quantity}</p>
            <button className="btn btn-outline-info btn-light" onClick={handleSumarUnidad}>+</button>
            <button title="Agregar al carrito" className="ms-3 btn btn-info" onClick={()=>handleAgregarAlCarrito(item,quantity)}>
                <img src={cartIcon} alt="carrito"/>
            </button>
            <ToastContainer/>
        </div>
    )
}