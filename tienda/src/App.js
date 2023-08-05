import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemListContainer/>}/>
                    <Route path="category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="item/:idProducto" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={
                    <div className="text-center">
                        <h2>ERROR</h2>
                        <p>No se encontraron resultados...</p>
                    </div>  
                }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}