import { useContext } from "react"
import { useParams } from "react-router-dom"
import { miContexto } from "./CustomContext"

const ProductDetailContainer = () => {

    const params = useParams()
    const elValorDelContexto = useContext(miContexto)

    const handleClick = () => {
        elValorDelContexto.setCantidadProductos(elValorDelContexto.cantProd + 1)
    }

    return (
        <div className="flex-grow">
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    )
}

export default ProductDetailContainer