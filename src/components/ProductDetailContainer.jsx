import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { carritoContexto } from "./CarritoContext"
import toast from "react-hot-toast"

const ProductDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const params = useParams()
    const valor = useContext(carritoContexto)


    useEffect(() => {
        fetch('/productos.json')
            .then((res) => {
                return res.json()
            })
            .then((res) => {

                /* 
                
                let productoEncontrado;

                res.forEach((item)=>{
                    if(item.id == params.id) {
                        productoEncontrado = item
                    }
                }) 
                    
                */

                const productoEncontrado = res.find((item)=>{
                    if(item.id == params.id) {
                        return item
                    }
                })

                setProducto(productoEncontrado)

            });
    }, [])


    const handleClick = async () => {
        //toast.loading("Agregando producto al carrito")
        //await new Promise((resolve) => setTimeout(resolve, 1000))
        valor.handleAgregar(producto)
        //toast.dismiss()
        toast.success("Producto agregado al carrito")
    }

    return (
        <div className="flex-grow product-detail">
            <h2>{producto.title} - ${producto.price}</h2>
            <img src={producto.thumbnail} alt={producto.title} />
            <p>{producto.description}</p>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    )
}

export default ProductDetailContainer

