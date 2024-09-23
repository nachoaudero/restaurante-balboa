import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Order } from './pages/Order'
import { Products } from './pages/Products'
import { Register } from './pages/Register'
import { User } from './pages/User'
import { useState } from 'react'


export const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')

  const login = (name) => {
    setIsAuthenticated(true)
    setUsername(name)
  }

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} username={username} />
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/productos' element={<Products />}></Route>
          <Route path='/pedido' element={<Order />}></Route>
          <Route path='/login' element={<Login onLogin={login} />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/usuario' element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  )
}
