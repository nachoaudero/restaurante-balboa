import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './layouts/Navbar'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Order } from './pages/Order'
import { Products } from './pages/Products'
import { Register } from './pages/Register'
import { User } from './pages/User'
import { useState, useEffect } from 'react'
import { PublicRoute } from './routes/PublicRoute.jsx'
import { PrivateRoute } from './routes/PrivateRoute.jsx'
import { AdminRoute } from './routes/AdminRoute.jsx'

import AdminProducts from "./pages/AdminProducts.jsx";
import AdminSales from "./pages/AdminSales.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";


export const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';

    if (token) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setIsAdmin(storedIsAdmin);
    }
  }, []);

  const login = (name, is_admin, token) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', name);
    localStorage.setItem('isAdmin', is_admin);

    setIsAuthenticated(true)
    setIsAdmin(is_admin)
    setUsername(name)
  }

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');

    setIsAuthenticated(false)
    setIsAdmin(false)
    setUsername('')
  }

  return (
    <Router>
      <main className='d-flex flex-column min-vh-100'>
        <Navbar
          isAuthenticated={isAuthenticated}
          username={username}
          onLogout={logout}
          isAdmin={isAdmin}
        />
        <Routes>
          {/*  Ruta publica */}
          <Route path='/' element={<Home />} />
          <Route path="/productos" element={<Products />} />

          {/* Ruta publica solo para no autenticados */}
          <Route element={<PublicRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin} />}>
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Rutas protegidas para usuarios autenticados */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/pedido" element={<Order />} />
            <Route path="/usuario" element={<User />} />
          </Route>

          {/* Rutas protegidas solo para administradores */}
          <Route element={<AdminRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin} />}>
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/sales" element={<AdminSales />} />
            <Route path="/admin/users" element={<AdminUsers />} />
          </Route>

          {/* Redirigir a Home para rutas no existentes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
