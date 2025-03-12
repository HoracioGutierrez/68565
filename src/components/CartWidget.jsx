import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { miContexto } from "./CustomContext"

const CartWidget = () => {

    const elValorDelContexto = useContext(miContexto)
    console.log("🚀 ~ CartWidget ~ elValorDelContexto:", elValorDelContexto)

    return (
        <NavLink viewTransition to="/carrito" className="header__link">
            <img src="/shopping-cart.svg" alt="Icono de carrito" />
            {elValorDelContexto.cantProd}
        </NavLink>
    )
}

export default CartWidget