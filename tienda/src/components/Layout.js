import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

export default function Layout () {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main className="d-flex container justify-content-center pt-3 pb-3">
                <Outlet/>
            </main>
        </div>
    )
}