import { useState } from "react"

export const Contador = () => {

    //Esto me permite tener una variable que si su valor cambia, cambia tambien el UI
    //Formula (sintaxis)
    //const [elEstado,setElEstado] = useState(valorInicial)

    const [contador, setContador] = useState(0)

    //contador = 1
    //contador++
    //contador = contador + 1
    //contador += 1

    return (
        <div>
            <p>Cantidad : {contador}</p>
            <button>sumar</button>
            <button>resta</button>
        </div>
    )
}