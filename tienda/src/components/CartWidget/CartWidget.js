import carrito from "./assets/cart.svg";

export default function CartWidget() {
    return (
        <div className="p-2">
            <button type="button" className="btn btn-outline-info position-relative">
                <img src={carrito} alt="carrito"/>
                <span id="campoCantidadCarrito" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                    3
                    <span className="visually-hidden">productos agregados</span>
                </span>
            </button>
        </div>
    )
}