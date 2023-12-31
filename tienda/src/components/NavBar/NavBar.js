import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import magnifyingGlass from "./assets/magnifying-glass.svg";
import record from "./assets/record-vinyl-solid.svg";
import {Link,NavLink,useNavigate,useParams} from "react-router-dom";
import { useState } from "react";

export default function NavBar() {

    const [buscador, setBuscador] = useState(undefined);

    const navigate = useNavigate();

    function handleOnSubmit(event) {
        
        event.preventDefault();

        if (buscador) {
            navigate(`/artist/${buscador}`);
        }
    }

    return (
    <nav className="navbar navbar-expand-md bg-info">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand fw-bold text-light" href="#">
                <img src={record} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> DISCOSGB
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    MÚSICA
                </a>
                <ul className="dropdown-menu">
                    <li><NavLink to={`category/albumes`} className={({isActive}) => isActive ? "dropdown-item bg-info text-white" : "dropdown-item bg-none"} href="#">Álbumes</NavLink></li>
                    <li><NavLink to={`category/sencillos`} className={({isActive}) => isActive ? "dropdown-item bg-info text-white" : "dropdown-item bg-none"} href="#">Sencillos</NavLink></li>
                </ul>
                </li>
                    <CartWidget/>
            </ul>
            <form onSubmit={handleOnSubmit} className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar un artista" aria-label="Search" onChange={({target})=>setBuscador(target.value)}/>
                <button className="btn btn-outline-info" type="submit"><img src={magnifyingGlass} alt="buscador"/></button>
            </form>
            </div>
        </div>
    </nav>
    )
}