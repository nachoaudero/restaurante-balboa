import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/user/login', {
                email,
                password
            });
            const { token, user } = response.data;
            localStorage.setItem('authToken', token);
            onLogin(user.full_name);
            navigate('/');
        } catch (error) {
            alert('Error al iniciar sesión: ' + error.response.data.message);
        }
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
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
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};
