import { Timestamp, addDoc, collection, getDocs } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {db} from "../../config/firebase";
import Loader from "../Loader/Loader";
import { ToastContainer } from "react-toastify";

export default function Checkout () {

    const ordersCollectionRef = collection(db, "orders");

    const [ordersList, setOrdersList] = useState([]);

    const [purchase, setPurchase] = useState([]);

    const [newOrderId, setNewOrderId] = useState(undefined);

    const {cart,getTotalPrice,clearCart,notifyWrongOrder} = useContext(CartContext);

    const [loading, setLoading] = useState(false);

    const createOrder = async ({nombre,correo}) => {
        setLoading(true);
        const order = {
            buyer: {
                nombre,correo
            },
            items: cart,
            total: getTotalPrice(),
            date: Timestamp.fromDate(new Date()),
            state:"generated"
        }
        if (nombre.length > 0 && correo.length > 0 && getTotalPrice() > 0 && order.items.length > 0) {
            const newOrder = await addDoc (ordersCollectionRef, order);
            setNewOrderId(newOrder.id);
            getOrdersList();
            clearCart();
        } else {
            notifyWrongOrder();
        }
        setLoading(false);
    }

    const getOrdersList = async () => {
        const data = await getDocs(ordersCollectionRef);
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        setOrdersList(filteredData);
        setLoading(false);
    }

    useEffect(()=>{
        let item = ordersList.find(e=>e.id==newOrderId);
        setPurchase(item);
    },[ordersList])

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="text-center w-75">
            <h3 className="text-info mb-3">CHECKOUT</h3>
            {!newOrderId && 
                <CheckoutForm onConfirm={createOrder}/>
            }
            {newOrderId && purchase &&
                <div>
                    <h4>El código de su orden es: {newOrderId}</h4>
                    <p>El total a abonar es de ${purchase.total}</p>
                </div>
            }
            <ToastContainer/>
        </div>
    )
}