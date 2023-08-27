import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {FaTrash} from "react-icons/fa6";
import {Link} from "react-router-dom";

export default function CartItem ({product}) {
    let {id,name,artist,image,quantity,price} = product;
    const {removeItem} = useContext(CartContext);
    return (
        <li className="p-2 m-4 row border rounded d-flex align-items-center justify-content-between">
            <div className="col-12 col-lg-7 d-flex">
                <div><img className="cart-img me-2" src={image}/></div>
                <div className="d-flex flex-column">
                    <Link className="cart-name" to={`/item/${id}`}>{name}</Link>
                    <span className="text-secondary small">{artist}</span>
                </div>
                
                
            </div>
            <div className="p-2 col-6 col-lg-2">
                ${price} x {quantity}u.
            </div>
            <div className="col-6 col-lg-2 small">
                SUBTOTAL: ${price*quantity}
            </div>
            <div className="col-12 col-lg-1">
                <button className="btn" onClick={()=>removeItem(id)}><FaTrash/></button>
            </div>
        </li>
    )
}