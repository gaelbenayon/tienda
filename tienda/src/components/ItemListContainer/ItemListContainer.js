import {useState,useEffect} from "react";
import { getProducts, getProductsByCategory } from "../../data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    const [loadState,setLoadState] = useState(true);
    
    useEffect(()=>{
        setLoadState(true);

        const obtenerDatos = categoryId ? getProductsByCategory : getProducts;
        
        obtenerDatos(categoryId)
            .then(response => {
                setProducts(response);
                setLoadState(false);
            })
            .catch(error => {
                console.error(error);
            })
    },[categoryId])

    if (loadState) {
        return (
            <Loader/>
        )
    }

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )   
}