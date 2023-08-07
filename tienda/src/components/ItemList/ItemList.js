import Item from "../Item/Item";

export default function ItemList ({products}) {
    return (
        <div>
            <h2 className="text-center p-2 pb-3 text-uppercase text-info">Catálogo de música</h2>
            <section className="row justify-content-center g-0">
                {products.map((item)=>{
                    return (
                        <Item key={item.id} {...item}/>
                    )
                })}
            </section>
        </div>
    )
}