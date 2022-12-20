import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className="top-navegador">
        <div className="topnav">
            <a href="index.html" className='titulo'>React Clothing</a>
            <ul className="menu-principal">
                <li><a href="">Tienda</a></li>
                <li><a href="">Tabla de talles</a></li>
                <li><a href="">Carrito</a></li>
                <li><a href="">Sobre Nosotros</a></li>
            </ul>
        </div>

        <CartWidget></CartWidget>

    </header>
  )
}

export default NavBar