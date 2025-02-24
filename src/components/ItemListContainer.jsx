import { useState, useEffect } from "react";

const ItemListContainer = () => {
    //Estados
    const [resultado, setResultado] = useState([])

    //Efectos
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setResultado(res.products) //[....]
            });
    }, [])

    //Vista
    return (
        <div>{JSON.stringify(resultado)}</div>
    )
}
export default ItemListContainer