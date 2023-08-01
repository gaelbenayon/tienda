import {useState} from "react";

export default function ItemListContainer({greeting}) {
    const [cantidadDiscos, setCantidadDiscos] = useState(0);

    function handleClickSumarDisco() {
        setCantidadDiscos(cantidadDiscos + 1);
    }

    function handleClickRestarDisco() {
        setCantidadDiscos(cantidadDiscos - 1);
    }

    return (
        <div>
            <h1 className="text-center p-1">{greeting}</h1>
            <p>Discos: {cantidadDiscos}</p>
            <button onClick={handleClickSumarDisco}>Sumar disco</button>
            <button onClick={handleClickRestarDisco}>Restar disco</button>
        </div>
    )   
}