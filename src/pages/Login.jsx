import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = ({ onLogin }) => {

  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (name.trim()) {
      onLogin(name);
      navigate('/');
    } else {
      alert('Por favor, ingresa un nombre de usuario válido');
    }
  }

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  )
}
