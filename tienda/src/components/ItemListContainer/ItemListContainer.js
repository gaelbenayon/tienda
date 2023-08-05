import {useState,useEffect} from "react";
import { getProducts, getProductsByCategory } from "../../data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    
    useEffect(()=>{
        const obtenerDatos = categoryId ? getProductsByCategory : getProducts

        obtenerDatos(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )   
}