import { useContext } from "react"
import Formulario from "./Formulario"
import { carritoContexto } from "./CarritoContext"


const Carrito = () => {

  const valor = useContext(carritoContexto)

  return (
    <div>
      <h2>Carrito</h2>
      <p>Cantidad de productos: {valor.cantProd}</p>
      <p>Total: ${valor.totalPrecio}</p>
      <ul>
        {valor.carrito.map((item,indice)=>{
          return (
            <li key={indice}>
              <p>{item.title} - unidad : ${item.price}</p>
            </li>
          )
        })}
      </ul>
      <Formulario />
    </div>
  )
}

export default Carrito