import { Link } from "react-router-dom"

export const Navbar = ({ isAuthenticated, username }) => {
  return (
    <nav className="navbar navbar-expand-md bg-main-1">
      <div className="container-fluid d">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link cl-withe" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cl-withe" to="/pedido">Mi Pedido</Link>
            </li>

            {isAuthenticated
              ? (
                <li className="nav-item">
                  <Link className="nav-link cl-withe" to="/usuario">{username}</Link>
                </li>
              )
              : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link cl-withe" to="/login">Iniciar sesión</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link cl-withe" to="/register">Registrarse</Link>
                  </li>
                </>
              )}
          </ul>
        </div>
        <Link className="navbar-brand" to="/">
          <img src="/src/assets/images/balboa.png" alt="Logo" width="60" />
        </Link>
      </div>
    </nav>
  )
}
