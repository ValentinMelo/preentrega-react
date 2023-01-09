import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, size, price, stock, category, image, description} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: {price}</p>

            <button className='btn btn-dark' onClick={handleVolver}>Volver a tienda</button>
        </div>
    )
}

export default ItemDetail