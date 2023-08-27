import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer/>}/>
                        <Route path="category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="artist/:artistId" element={<ItemListContainer/>}/>
                        <Route path="item/:idProducto" element={<ItemDetailContainer/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="checkout" element={<Checkout/>}/>
                        <Route path="*" element={
                        <div className="text-center">
                            <h2>ERROR</h2>
                            <p>No se encontraron resultados...</p>
                        </div>  
                    }/>
                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}