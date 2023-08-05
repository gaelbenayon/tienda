import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({artist,name,releaseYear,image,genre,type,price}) {

    let lista = "";
    if (genre) {
        for (let i of genre) {
            lista += `${i} | `
        }
    }

    return (
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{artist}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo: {type}</li>
                <li className="list-group-item">Género: {lista}</li>
                <li className="list-group-item">Año de lanzamiento: {releaseYear}</li>
                <li className="list-group-item">Valor: USD ${price}</li>
            </ul>
            <div className="card-body">
                <ItemCount/>
            </div>
        </div>
    )
}