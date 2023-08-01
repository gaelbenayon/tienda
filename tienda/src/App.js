import Header from "./components/Header";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="productos" element={<Productos/>}/>
                <Route path="*" element={
                    <div>
                        <p>404</p>
                    </div>  
                }/>
            </Routes>
        </BrowserRouter>
    )
}