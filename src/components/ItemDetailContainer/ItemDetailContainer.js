import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        pedirItemPorId( Number(itemId) )
            .then((data) => {
                setItem(data)
            })
    }, [itemId])

    return (
        <div className="container-sm container text-center">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer