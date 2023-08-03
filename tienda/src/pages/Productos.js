import { Link } from "react-router-dom";
import discografia from "../data";

export default function Productos () {
    return (
        <div className="container">
            <p>Catálogo de productos</p>
            <Link to="/">Inicio</Link>
            <section className="row">
                {discografia.map((item)=>{
                    return (
                        <article className="d-flex">
                            <h5>{item.artist}</h5>
                            <img className="w-25" src={item.image}/>
                        </article>
                    )
                })}
            </section>
            
        </div>
    )
}