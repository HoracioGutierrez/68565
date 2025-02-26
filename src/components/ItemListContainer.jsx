import { useState, useEffect } from "react";

const ItemListContainer = () => {
    //Estados
    const [resultado, setResultado] = useState([])

    //Efectos
    useEffect(() => {
        fetch('/productos.json')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                //res = { products : []}
                //res = []
                setResultado(res) //[....]
            });
    }, [])

    //Vista
    return (
        <div>
            {resultado.map((producto) => {
                return (
                    <article>
                        <h3>{producto.title}</h3>
                        <p>${producto.price}</p>
                    </article>
                )
            })}
        </div>
    )
}
export default ItemListContainer