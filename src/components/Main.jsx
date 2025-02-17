/* import { Button } from "antd" */

import { Button } from "./Button"
import { Contador } from "./Contador"

export const Main = () => {
    return (
        <main>
            <h2>Home</h2>
            {/* <Button type="primary">Button</Button> */}
            {/* <button className="btn">soy un boton</button> */}

            {/* Aca se ejecuta el componente */}
            <Button>Boton 1</Button>
            {/* Button() */}

            <Button>Login</Button>
            {/* Button() */}

            <Button>Agregar al Carrito</Button>
            {/* Button() */}

            <Button>soy un texto</Button>

            <Contador />

        </main>
    )
}