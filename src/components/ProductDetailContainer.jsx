import { useParams } from "react-router-dom"

const ProductDetailContainer = () => {

    const params = useParams() 
    console.log("🚀 ~ ProductDetailContainer ~ params:", params)
    
    /* 
    
    Si usan una API : 

    La api seguramente tenga un endpoint que les permita obtener un producto en particular. Ej: 
    https://api.mercadolibre.com/items/MLA123456
    https://dummyjson.com/products/1
    https://67c9a0f8102d684575c2dd7d.mockapi.io/comida?id=8
    

    Si usan un archivo JSON local:

    En el useEffect, deberían filtrar el array de productos, es decir hacer un bucle sobre todo el array, para obtener el producto cuyo id coincida con el parámetro de la URL (un condicional que compare el id del item por el que van pasando y params). 

    */
    
    return (
        <div className="flex-grow">ProductDetailContainer</div>
    )
}

export default ProductDetailContainer