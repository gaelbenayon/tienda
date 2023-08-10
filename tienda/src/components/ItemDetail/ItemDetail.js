import { useEffect,useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Accordion from "../Accordion/Accordion";
import Loader from "../Loader/Loader";

export default function ItemDetail({artist,name,releaseYear,image,genre,type,price,tracks}) {

    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        artist ? setIsLoading(false) : setIsLoading(true);
    },[artist])

    if (isLoading) {
        return (<Loader/>)
    }

    let genres = "";
    if (genre) {
        for (let i of genre) {
            genres += `${i}, `;
        }
    }

    genres = genres.slice(0,genres.length - 2);

    return (
        <div className="card mb-3 w-75">
            <div className="row g-0 align-items-center">
                <div className="col-md-6 col-xl-5 col-xxl-4">
                    <img src={image} className="img-fluid rounded-start w-100" alt={name}/>
                </div>
                <div className="col-md-6 col-xl-7 col-xxl-8">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Nombre: {name}</li>
                            <li className="list-group-item">Artista: {artist}</li>
                            <li className="list-group-item">Tipo: {type}</li>
                            {tracks && <li className="list-group-item">Cantidad de tracks: {tracks.length}</li>}
                            {tracks && <li className="list-group-item">{<Accordion content={tracks}/>}</li>}
                            <li className="list-group-item">Género: {genres}</li>
                            <li className="list-group-item">Año de lanzamiento: {releaseYear}</li>
                            <li className="list-group-item">Valor: USD ${price}</li>
                            <li className="list-group-item"><ItemCount/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

