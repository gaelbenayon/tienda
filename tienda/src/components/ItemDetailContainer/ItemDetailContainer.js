import { useParams } from "react-router-dom";
import { getProductById } from "../../data";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer () {

    const {idProducto} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        getProductById(idProducto)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[idProducto])
    
    return (
        <ItemDetail {...producto}/>
    )
}