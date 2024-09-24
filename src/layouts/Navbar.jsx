import { Link } from "react-router-dom"

export const Navbar = ({ isAuthenticated, username }) => {
  return (
    <nav className="navbar navbar-expand-md bg-main-1">
      <div className="container-sm flex-row-reverse">
        <Link className="navbar-brand m-0" to="/">
          <img src="/src/assets/images/balboa.png" alt="Logo" width="90" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2 cl-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link cl-white" to="/productos">
                Productos
                <i className="bi bi-shop ms-2" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cl-white" to="/pedido">
                Mi Pedido
                <i className="bi bi-cart ms-2" />
              </Link>
            </li>

            {isAuthenticated
              ? (
                <li className="nav-item">
                  <Link className="nav-link cl-white" to="/usuario">
                    {username}
                    <i className="bi bi-person ms-2" />
                  </Link>
                </li>
              )
              : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link cl-white" to="/login">
                      Iniciar sesión
                      <i className="bi bi-person ms-2" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link cl-white" to="/register">
                      Registrarse
                      <i className="bi bi-person-plus ms-2" />
                    </Link>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
