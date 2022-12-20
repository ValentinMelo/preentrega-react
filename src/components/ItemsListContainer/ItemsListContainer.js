import React from 'react'
import './ItemsListContainer.css'

const ItemsListContainer = (props) => {
  return (
    <div className='mensaje-saludo'>
        <h2 className='saludo'>{props.name}</h2>
    </div>
  )
}

export default ItemsListContainer