import { useEffect, useState } from "react"

function Reloj() {

    const [test,setTest] = useState(true)

    useEffect(()=>{
        setInterval(()=>{
            console.log("paso un segundo")
        },1000)
    },[])

    const handleIniciar = () => {
        setTest(false)
    }

    const handlePausar = () => {}

    return (
        <div>
            <h2>Reloj</h2>
            <button onClick={handleIniciar}>iniciar</button>
            <button onClick={handlePausar}>pausar</button>
        </div>
    )
}
export default Reloj