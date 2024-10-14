import { NavLink } from "react-router-dom"

export const Navbar = ({ isAuthenticated, username, onLogout }) => {
  return (
    <header className="navbar navbar-expand-md bg-main-1 sticky-top">
      <section className="container-sm flex-row-reverse">
        <NavLink className="navbar-brand m-0" to="/">
          <img src="/src/assets/images/balboa.png" alt="Logo" width="90" />
        </NavLink>
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
        <nav className="collapse navbar-collapse mb-3 mb-md-0" id="navbar">
          <ul className="navbar-nav align-items-center gap-4">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 activo" : "nav-link cl-white link-hover p-0 pb-1"} to="/productos">
                Productos
                <i className="bi bi-shop ms-2" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 activo" : "nav-link cl-white link-hover p-0 pb-1"} to="/pedido">
                Mi Pedido
                <i className="bi bi-cart ms-2" />
              </NavLink>
            </li>

            {isAuthenticated
              ? (
                <>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 activo" : "nav-link cl-white link-hover p-0 pb-1"} to="/usuario">
                      {username}
                      <i className="bi bi-person ms-2" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 activo" : "nav-link cl-white link-hover p-0 pb-1"} to="/" onClick={onLogout}>
                      Cerrar Sesion
                      <i className="bi bi-box-arrow-left ms-2"></i>
                    </NavLink>
                  </li>
                </>
              )
              : (
                <>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 activo" : "nav-link cl-white link-hover p-0 pb-1"} to="/login">
                      Iniciar sesión
                      <i className="bi bi-person ms-2" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 activo" : "nav-link cl-white link-hover p-0 pb-1"} to="/register">
                      Registrarse
                      <i className="bi bi-person-plus ms-2" />
                    </NavLink>
                  </li>
                </>
              )}
          </ul>
        </nav>
      </section>
    </header >
  )
}
