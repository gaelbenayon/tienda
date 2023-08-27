import { useState } from "react";
import "./CheckoutForm.css"

export default function CheckoutForm ({onConfirm}) {

    const [nombre,setNombre] = useState("");
    const [correo,setCorreo] = useState("");

    function handleOnSubmit(event) {
        event.preventDefault();
        const userData = {
            nombre,correo
        }
        onConfirm(userData);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit} className="d-flex flex-column CheckoutForm">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" name="nombre" onChange={({target}) => setNombre(target.value)}/>
                <label htmlFor="correo">Correo electrónico</label>
                <input type="email" name="correo" onChange={({target}) => setCorreo(target.value)}/>
                <button className="btn btn-outline-info">Crear orden</button>
            </form>
        </div>
    )
}