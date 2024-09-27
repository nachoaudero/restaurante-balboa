import { useState } from "react";
import axios from "axios";
import { sendEmailVerificationCode } from "../utilities/sendEmailVerificationCode.jsx";
import VerificationModal from "../components/VerificationModal.jsx";

import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [full_name, setFull_name] = useState('')
    const [age, setAge] = useState('')
    const [dni, setDni] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [verificationCode, setVerificationCode] = useState('');

    const navigate = useNavigate();

    const generateCode = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    const handleRegister = async () => {
        const code = generateCode();
        setVerificationCode(code.toString())
        await sendEmailVerificationCode(email, code, full_name)
        setShowModal(true)
    }

    const handleVerification = async (enteredCode) => {
        if (enteredCode === verificationCode) {
            alert('¡Verificación exitosa!');
            try {
                const response = await axios.post('http://localhost:3001/user/create', {
                    email,
                    password,
                    full_name,
                    age,
                    dni
                });
                navigate('/login')
                alert(`Creado el usuario: ${response.data.email}`)
            } catch (error) {
                alert(`Error al registrarse ${error.message}`);
            }
        } else {
            alert('Código incorrecto, por favor intenta nuevamente.');
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
        <VerificationModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            onSubmit={handleVerification}
        />
    </div>
)}
