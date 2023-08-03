import Header from "./components/Header";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ArticleView from "./pages/ArticleView";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="productos" element={<Productos/>}/>
                <Route path="productos/:idProducto" element={<ArticleView/>}/>
                {/* <Route path="*" element={
                    <div>
                        <p>404</p>
                    </div>  
                }/> */}
            </Routes>
        </BrowserRouter>
    )
}