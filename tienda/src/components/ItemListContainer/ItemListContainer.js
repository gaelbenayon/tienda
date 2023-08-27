import {useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import {db} from "../../config/firebase";
import {getDocs, collection} from "firebase/firestore";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    const {artistId} = useParams();

    const [loadState,setLoadState] = useState(true);

    const discosRef = collection(db,"items");
    
    useEffect(()=>{
        setLoadState(true);

        const getDiscos = async() => {
            const results = await getDocs(discosRef);
            const filteredResults = results.docs.map((doc) => ({
                ...doc.data(), id:doc.id
            }))
            if (categoryId) {
                setProducts(filteredResults.filter(e=>e.category.toLowerCase()==categoryId.toLowerCase()));
            } else if (artistId) {
                setProducts(filteredResults.filter(e=>e.artist.toLowerCase()==artistId.toLowerCase()))
            } else {
                setProducts(filteredResults);
            }
            setLoadState(false);
        }
        getDiscos()

    },[categoryId,artistId])

    if (loadState) {
        return (
            <Loader/>
        )
    }

    return (
        <div>
            <ItemList products={products} param={artistId}/>
        </div>
    )   
}