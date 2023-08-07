import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";

export default function ItemDetail({artist,name,releaseYear,image,genre,type,price}) {

    while(!artist) {
        return (
            <Loader/>
        )
    }

    let lista = "";
    if (genre) {
        for (let i of genre) {
            lista += `${i} | `;
        }
    }

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
                            <li className="list-group-item">Género: {lista}</li>
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

