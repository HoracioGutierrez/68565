import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { carritoContexto } from "./CarritoContext"
import toast from "react-hot-toast"
import { addDoc, collection, getDocs, getFirestore, query, where, getDoc, doc } from "firebase/firestore"
import { app } from "../firebaseConfig"

const ProductDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const params = useParams()
    const valor = useContext(carritoContexto)


    useEffect(() => {


        /* const idNumerico = parseInt(params.id)
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const miFiltro = query(productosCollection, where("id", "==", idNumerico))
        const miConsulta = getDocs(miFiltro)
            .then((respuesta) => {

                const productoEncontrado = respuesta.docs.map((doc) => {
                    return doc.data()
                })

                setProducto(productoEncontrado[0])
            })
            .catch(() => {
                console.log("Salio todo mal")
            }) */

        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const miFiltro = doc(productosCollection, params.id)
        const miConsulta = getDoc(miFiltro)

        miConsulta
            .then((respuesta) => {
                console.log(respuesta.data())
                setProducto(respuesta.data())
            })
            .catch(() => {
                console.log("Salio todo mal")
            })
    }, [])


    const handleClick = async () => {


        const productoCarrito = producto
        productoCarrito.cantidad = 1
        productoCarrito.userId = "1234567890"

        const db = getFirestore(app)
        const carritoCollection = collection(db, "carrito")
        const miConsulta = addDoc(carritoCollection, productoCarrito)

        miConsulta
            .then(() => {
                console.log("Salio todo bien")
                valor.handleAgregar(producto)
                toast.success("Producto agregado al carrito")
            })
            .catch(() => {
                console.log("Salio todo mal")
            })


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

