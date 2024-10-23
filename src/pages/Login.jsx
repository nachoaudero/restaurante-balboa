import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { LoginCard } from '../components/LoginCard';

export const Login = () => {
    const { login } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async (email, password) => {
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
        <section className="flex-grow-1 bg-grey container-fluid">
            <aside className='container-sm my-5'>
                <LoginCard handleLogin={handleLogin} />
            </aside>
        </section>
    );
};
