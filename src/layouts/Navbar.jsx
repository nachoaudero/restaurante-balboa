import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"
import balboa from "../assets/images/balboa.png"

export const Navbar = () => {
  const { userData, logout } = useContext(UserContext)

  return (
    <header className="navbar navbar-expand-md bg-main-1 sticky-top">
      <section className="container-sm flex-row-reverse">
        <NavLink className="navbar-brand m-0" to="/">
          <img src={balboa} alt="Logo" width="90" />
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
        <nav className="collapse navbar-collapse my-2 mb-md-0" id="navbar">
          {!userData.isAuthenticated ? (
            <>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/productos">
                  Productos
                  <i className="bi bi-shop ms-2" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/pedido">
                  Mi Pedido
                  <i className="bi bi-cart ms-2" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/login">
                  Iniciar sesión
                  <i className="bi bi-person ms-2" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/register">
                  Registrarse
                  <i className="bi bi-person-plus ms-2" />
                </NavLink>
              </li>
            </>
          ) : (
            !userData.isAdmin ? (
              <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/productos">
                    Productos
                    <i className="bi bi-shop ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/pedido">
                    Mi Pedido
                    <i className="bi bi-cart ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/usuario">
                    {userData.username}
                    <i className="bi bi-person ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/login" onClick={logout}>
                    Cerrar Sesion
                    <i className="bi bi-box-arrow-left ms-2"></i>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/admin/products">
                    Editar Productos
                    <i className="bi bi-pen ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/admin/sales">
                    Ventas
                    <i className="bi bi-cash ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/admin/users">
                    Editar Usuarios
                    <i className="bi bi-pen ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/usuario">
                    Admin: {userData.username}
                    <i className="bi bi-person ms-2" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link cl-white link-active p-0 pb-1 me-4" : "nav-link cl-white link-hover p-0 pb-1 me-4"} to="/login" onClick={logout}>
                    Cerrar Sesion
                    <i className="bi bi-box-arrow-left ms-2"></i>
                  </NavLink>
                </li>
              </>
            )
          )
          }
        </nav>
      </section>
    </header >
  )
}
