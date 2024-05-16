import Carrito from "./Carrito"



const NavBar = () => {
    return (
<header className="header">
    <h1> benyamanco shop</h1>
    <nav className="nav">
        <ul className="nav-menu">
            <li><a className="nav-link" href="#">inicio</a></li>
            <li><a className="nav-link" href="#">camperas</a></li>
            <li><a className="nav-link" href="#">camisetas</a></li>
            <li> <a className="nav-link" href="#">pantalones</a></li>
        </ul>
    </nav>
    <Carrito />
</header>
    )
}

export default NavBar
