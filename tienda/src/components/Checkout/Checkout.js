import { Timestamp } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkout () {

    const {cart,getTotalPrice} = useContext(CartContext);

    const createOrder = ({nombre,correo}) => {
        const order = {
            buyer: {
                nombre,correo
            },
            items: cart,
            total: getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        console.log(order);
    }
    return (
        <div className="text-center w-75">
            <h3>CHECKOUT</h3>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}