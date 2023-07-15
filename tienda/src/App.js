import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <div>
            <header><NavBar/></header>
            <main><ItemListContainer greeting={"Bienvenid@ a la tienda de tus artistas favoritos"}/></main>
        </div>
    )
}

export default App;