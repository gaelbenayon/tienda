import { Link } from "react-router-dom";

export default function Item ({id,name,image,artist}) {
    return (
        <article className="card m-3" style={{width: 18 + 'rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{artist}</p>
                <Link to={`/item/${id}`} className="btn btn-info text-light">VER MÁS</Link>
            </div>
        </article>
    )
}