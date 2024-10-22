import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(UserContext)

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/user/login', {
                email,
                password
            });
            const { token, user } = response.data;
            login(user.full_name, user.is_admin, token);
            if (user.is_admin) {
                navigate('/admin/products')
            } else {
                navigate('/productos');
            }
        } catch (error) {
            alert('Error al iniciar sesión: ' + error.response.data.message);
        }
    };

    return (
        <div className="container flex-grow-1">
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
