import { Link } from "react-router-dom";
import Item from "../Item/Item";

export default function ItemList ({products,param}) {
    return (
        <div>
            <h2 className="text-center p-2 pb-3 text-uppercase text-info">Catálogo de música</h2>
            <section className="row justify-content-center g-0">
                {products.length > 0 ?
                    products.map((item)=>{
                        return (
                            <Item key={item.id} {...item}/>
                        )
                    }) :
                    <div className="alert alert-light" role="alert">
                        No se encontraron resultados para <i>{param}</i>, mirá nuestros productos <Link to="/" className="text-info">acá</Link>
                    </div>
                }
            </section>
        </div>
    )
}