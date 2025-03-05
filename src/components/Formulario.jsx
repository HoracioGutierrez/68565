import { useEffect, useRef } from "react"

function Formulario() {

    //estados
    //useRef(); => { current : null }
    const inputRef = useRef()

    /* document.addEventListener("click",()=>{
        console.log("click en el documento")
    })
 */
    //efectos
    useEffect(() => {
        //console.log("🚀 ~ Formulario ~ inputRef:", inputRef) //{current:<input/>}
        //inputRef.current.value => "El valor del input"
    }, [])

    //acciones
    //form.addEventListener('submit', (e) => {})
    //submitButton.addEventListener('click', (e) => {})
    //input.addEventListener('change', (e) => {})
    const handleSubmit = (e) => {
        e.preventDefault() //Esto nos da la "no recarga" de pagina
        //console.log(inputRef.current.value)
    }

    //vista
    return (
        <div>
            <h2>Suscribete al newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" ref={inputRef} />
                </div>
                <button>suscribir</button>
            </form>
        </div>
    )
}
export default Formulario