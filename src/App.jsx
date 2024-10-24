import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './layouts/Navbar'
import { Footer } from './layouts/Footer'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Order } from './pages/Order'
import { Products } from './pages/Products'
import { Register } from './pages/Register'
import { User } from './pages/User'
import { PublicRoute } from './routes/PublicRoute.jsx'
import { PrivateRoute } from './routes/PrivateRoute.jsx'
import { AdminRoute } from './routes/AdminRoute.jsx'

import AdminProducts from "./pages/AdminProducts.jsx";
import AdminSales from "./pages/AdminSales.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
import { UserProvider } from './contexts/UserContext.jsx'


export const App = () => {

  return (
    <UserProvider>
      <Router>
        <main className='d-flex flex-column min-vh-100'>
          <Navbar />
          <Routes>
            {/*  Ruta publica */}
            <Route path='/' element={<Home />} />
            <Route path="/productos" element={<Products />} />

            {/* Ruta publica solo para no autenticados */}
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Rutas protegidas para usuarios autenticados */}
            <Route element={<PrivateRoute />}>
              <Route path="/pedido" element={<Order />} />
              <Route path="/usuario" element={<User />} />
            </Route>

            {/* Rutas protegidas solo para administradores */}
            <Route element={<AdminRoute />}>
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
    </UserProvider>
  )
}
