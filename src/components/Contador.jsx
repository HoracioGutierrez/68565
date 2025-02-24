import { useState } from "react"

//Este es el componente
export const Contador = () => {

    //Este es el estado
    const [contador, setContador] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(true)

    //Estas son acciones
    const handleSumar = () => {
        setContador(contador + 1)
    }

    const handleRestar = () => {
        setContador(contador - 1)
    }

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    //Esta es la vista
    return (
        <div className={isDarkMode ? "dark" : "light"}>
            <p>Cantidad : {contador}</p>
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleRestar}>restar</button>
            <button onClick={handleDarkMode}>cambiar modo claro/oscuro</button>
        </div>
    )
}