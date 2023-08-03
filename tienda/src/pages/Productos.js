import { Link } from "react-router-dom";
import discografia from "../data";

export default function Productos () {
    return (
        <div className="container">
            <p className="text-center">Catálogo de productos</p>
            <section className="d-flex row g-3">
                {discografia.map((item)=>{
                    return (
                        <Link className="d-flex align-items-center col-4" to={`/productos/${item.id}`}>
                            <article className="d-flex flex-column align-items-center text-center">
                                <h4>{item.name}</h4>
                                <img className="w-50" src={item.image} alt={item.name}/>
                                <h5 className="text-muted">{item.artist}</h5>
                            </article>
                        </Link>
                        
                    )
                })}
            </section>
            
        </div>
    )
}