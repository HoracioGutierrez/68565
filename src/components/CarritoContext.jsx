import { createContext, useState } from "react";

//Este es mi contexto
export const carritoContexto = createContext();

//Este es el Provider de mi contexto
export const Provider = carritoContexto.Provider;

//Este es mi Provider personalizado (custom provider)
const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [cantProd, setCantProd] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    const handleAgregar = (producto) => {
        //carrito.push(producto)
        //Si el estado es array, siempre lo tengo que clonar primero

        //const copia_con_map = carrito.map((item) => { return item })
        //const copia_con_slice = carrito.slice(0)

        //agrego producto al carrito
        const copia = [...carrito]
        //Hay que verificar la duplicidad de productos en el carrito
        copia.push(producto)
        setCarrito(copia)

        //aumento cantidad
        setCantProd(cantProd + 1)
        //aumento precio
        setTotalPrecio(totalPrecio + producto.price)

    }

    const handleEliminar = (producto) => {
        //disminuyo cantidad
        //disminuyo precio
        //elimino producto del carrito
    }

    const handleVaciar = () => {
        setCantProd(0);
        setTotalPrecio(0);
        setCarrito([]);
    }

    //Lo que se agregue a esta variable como propiedad, va a ser accesible desde cualquier otro componente. Este es el valor de mi contexto
    const valorDelContexto = {
        //carrito: carrito,
        carrito,
        //cantProd: cantProd,
        cantProd,
        //totalPrecio: totalPrecio,
        totalPrecio,
        handleAgregar,
        handleEliminar,
        handleVaciar,
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider;