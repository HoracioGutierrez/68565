import { useRef } from "react"

const Input = (props) => {

    
    const inputRef = useRef()

    const handleChange = (event) => {
        //event.targert.value
        //inputRef.current.value

        //console.log("soy handleChange")
        //console.log(event)
        props.onInputValue(inputRef.current.value)
    }

    return (
        <input
            /* onKeyDown={handleChange} */
            onChange={handleChange}
            type="text"
            id="nombre"
            name="nombre"
            ref={inputRef}
        />
    )
}

export default Input