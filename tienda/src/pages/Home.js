import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {Link} from "react-router-dom";

export default function Home () {
    return (
        <div>
            <ItemListContainer/>
            <Link to="productos">Productos</Link>
        </div>
    )
}