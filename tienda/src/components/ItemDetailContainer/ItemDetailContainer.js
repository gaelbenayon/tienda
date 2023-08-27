import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../config/firebase";
import {getDocs, collection} from "firebase/firestore";

const discosRef = collection(db,"items");

export default function ItemDetailContainer () {

    const {idProducto} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const getDiscos = async() => {
            const results = await getDocs(discosRef);
            const filteredResults = results.docs.map((doc) => ({
                ...doc.data(), id:doc.id
            }))
            setProducto(filteredResults.find(e=>e.id==idProducto));
        }
        getDiscos();
    },[idProducto])
    
    return (
        <ItemDetail {...producto}/>
    )
}