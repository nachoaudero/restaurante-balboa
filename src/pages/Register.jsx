import {useState} from "react";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFull_name] = useState('')
  const [age, setAge] = useState('')
  const [dni, setDni] = useState('')

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/create', {
        email,
        password,
        full_name,
        age,
        dni
      });
      alert(`Creado el usuario: ${response.data.email}`)
    } catch (error) {
      alert('Error al iniciar sesión: ' + error.response.data.message);
    }
  }


    return (
        <div className="container">
          <h2>Registrarse</h2>
          <input
              type="text"
              placeholder="Nombre completo"
              value={full_name}
              onChange={(e) => setFull_name(e.target.value)}
          />
          <input
              type="number"
              placeholder="Edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
          />
          <input
              type="number"
              placeholder="DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
          />
          <input
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Registrarse</button>
        </div>
    );
}
