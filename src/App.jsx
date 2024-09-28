import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './layouts/Navbar'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Order } from './pages/Order'
import { Products } from './pages/Products'
import { Register } from './pages/Register'
import { User } from './pages/User'
import { useState } from 'react'

//estilos y pages modulo admin
import AdminProducts from "./pages/AdminProducts.jsx";
import AdminSales from "./pages/AdminSales.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";


export const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')

  const login = (name) => {
    setIsAuthenticated(true)
    setUsername(name)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUsername('')
  }



  return (
    <Router>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar isAuthenticated={isAuthenticated} username={username} onLogout={logout} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/productos' element={<Products />}></Route>
          <Route path='/pedido' element={<Order />}></Route>
          <Route path='/login' element={<Login onLogin={login} />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/usuario' element={<User />}></Route>
          <Route path='/admin/products' element={<AdminProducts />}></Route>
          <Route path='/admin/sales' element={<AdminSales />}></Route>
          <Route path='/admin/users' element={<AdminUsers />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
