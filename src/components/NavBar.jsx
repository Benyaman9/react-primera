import Carrito from "./Carrito"
import ItemListContainer from "./ItemListContainer"



const NavBar = () => {
    return (
<header className="header">
    <h1> Ivess</h1>
    <nav className="nav">
        <ul className="nav-menu">
            <li><a className="nav-link" href="#">inicio</a></li>
            <li><a className="nav-link" href="#">Productos</a></li>
            <li><a className="nav-link" href="#">Servicios</a></li>
            <li> <a className="nav-link" href="#">Contacto</a></li>
        </ul>
    </nav>
    <Carrito />

</header>
    )
}

export default NavBar
