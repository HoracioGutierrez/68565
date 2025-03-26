import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";
import { app } from "../firebaseConfig";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";


const ItemListContainer = () => {

    const [resultado, setResultado] = useState([])
    const params = useParams()

    useEffect(() => {

        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")

        let miConsulta;

        if (params.id === undefined) {
            //Consulta sin filtro (todos los productos)
            miConsulta = getDocs(productosCollection)
        } else {
            //Consulta con filtro (todos los productos de una categoria)
            const miFiltro = query(productosCollection, where("category", "==", params.id))
            miConsulta = getDocs(miFiltro)
        }

        miConsulta
            .then((respuesta) => {
                //{metadata,docs,empty,size,etc...}
                //console.log(respuesta)

                //[{metadata,id,ref},{metadata,id,ref}]
                //console.log(respuesta.docs)

                /*
                const productosConFormato = []

                respuesta.docs.forEach((doc)=>{
                    productosConFormato.push(doc.data())
                })
                */

                /* 
                const productosConFormato = respuesta.docs.map((doc)=>{
                    return doc.data()
                }) 
                */

                //setResultado(productosConFormato)
                setResultado(respuesta.docs.map((doc) => {
                    /* 
                    Integrar el ID del documento a los datos del producto por si luego los voy a buscar usando getDoc + doc

                    const productoData = doc.data()
                    productoData.id = doc.id
                    return productoData 
                    */
                    const productoData = doc.data()
                    productoData.id = doc.id
                    return productoData

                    //Obvio el ID del documento y me quedo con el campo "id", luego los puedo filtrar usando getDocs + where("id")
                    //return doc.data()
                }))
            })
            .catch(() => {
                console.log("Salio todo mal")
            })
        /* 
        fetch(params.id === undefined ? '/productos.json' : `/${params.id}.json`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setResultado(res)
            }); 
        */
    }, [params.id])


    return (
        <div className="fluid-grid">
            {resultado.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        producto={producto}
                    />
                )
            })}
        </div>
    )
}
export default ItemListContainer