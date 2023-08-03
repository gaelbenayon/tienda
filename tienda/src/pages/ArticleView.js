import { useParams } from "react-router-dom";
import discografia from "../data";

export default function ArticleView () {
    const {idProducto} = useParams();
    let item = discografia.find(e => e.id == idProducto);
    let {artist,name,releaseYear,image,genre,type} = item;
    let genres = "";
    for (item of genre) {
        genres += `${item} `
    }
    return (
        <div className="container d-flex flex-column align-items-center">
            <h3>{name}</h3>
            <img className="w-50" src={image} alt={name}/>
            <h5>Artista: {artist}</h5>
            <h5>Año de lanzamiento: {releaseYear}</h5>
            <h5>Tipo: {type}</h5>
            <h5>Género: {genres}</h5>
        </div>
    )
}