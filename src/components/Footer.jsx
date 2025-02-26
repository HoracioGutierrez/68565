import { useState } from "react"
import Formulario from "./Formulario"

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(true)

    const handleToggle = () => {
        setIsVisible(!isVisible)
    }
    return (
        <footer className="footer">
            <button onClick={handleToggle}>
                X
            </button>
            {isVisible == true ? <Formulario /> : null}
            <p className="footer__text">&copy; Copyright 2025 - Horacio Gutierrez</p>
        </footer>
    )
}