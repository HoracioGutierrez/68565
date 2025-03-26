import { useContext } from "react"
import Formulario from "./Formulario"
import { carritoContexto } from "./CarritoContext"
import { app } from "../firebaseConfig";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";

/* 

{
        "id": 8,
        "title": "Dior J'adore",
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "category": "fragrances",
        "price": 89.99,
        "discountPercentage": 17.44,
        "rating": 3.31,
        "stock": 91,
        "tags": [
            "fragrances",
            "perfumes"
        ],
        "brand": "Dior",
        "sku": "E70NB03B",
        "weight": 10,
        "dimensions": {
            "width": 21.51,
            "height": 7,
            "depth": 26.51
        },
        "warrantyInformation": "Lifetime warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 5,
                "comment": "Fast shipping!",
                "date": "2024-05-23T08:56:21.619Z",
                "reviewerName": "Zoe Nicholson",
                "reviewerEmail": "zoe.nicholson@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Excellent quality!",
                "date": "2024-05-23T08:56:21.619Z",
                "reviewerName": "Addison Wright",
                "reviewerEmail": "addison.wright@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Would buy again!",
                "date": "2024-05-23T08:56:21.619Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "7 days return policy",
        "minimumOrderQuantity": 8,
        "meta": {
            "createdAt": "2024-05-23T08:56:21.619Z",
            "updatedAt": "2024-05-23T08:56:21.619Z",
            "barcode": "0887083199279",
            "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    }


*/

const Carrito = () => {

  const valor = useContext(carritoContexto)

  const handleClick = () => {

    const nuevoProducto = {
      category: "muebles",
      description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      id: 11,
      price: 1899.99,
      thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
      title: "Annibale Colombo Bed"
    }

    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
    const miConsulta = addDoc(productosCollection, nuevoProducto)

    miConsulta
      .then(() => {
        console.log("Salio todo bien")
        toast.success("Producto agregado a la base de datos")
      })
      .catch(() => {
        console.log("Salio todo mal")
      })
  }

  const handleClickTraer = () => {
    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
    const query = getDocs(productosCollection)

    query
      .then((resultadoDeLaConsulta) => {
        console.log("Salio todo bien")
        console.log(resultadoDeLaConsulta)
      })
      .catch(() => {
        console.log("Salio todo mal")
      })
  }

  return (
    <div>
      <h2>Carrito</h2>
      <p>Cantidad de productos: {valor.cantProd}</p>
      <p>Total: ${valor.totalPrecio}</p>
      <ul>
        {valor.carrito.map((item, indice) => {
          return (
            <li key={indice}>
              <p>{item.title} - unidad : ${item.price}</p>
            </li>
          )
        })}
      </ul>
      <Formulario />

      <button onClick={handleClick}>agregar producto a DB</button>
      <button onClick={handleClickTraer}>traer productos de DB</button>
    </div>
  )
}

export default Carrito