import { useState } from "react";
import axios from "axios";
import { sendEmailVerificationCode } from "../utilities/sendEmailVerificationCode.jsx";
import VerificationModal from "../components/VerificationModal.jsx";

import { useNavigate } from "react-router-dom";
import { RegisterCard } from "../components/RegisterCard.jsx";

export const Register = () => {
    const [user, setUser] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();


    const generateCode = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    const handleRegister = async (usuario) => {
        const code = generateCode();
        setVerificationCode(code.toString())
        setUser(usuario)
        await sendEmailVerificationCode(user.mail, code, user.nombre)
        setShowModal(true)
    }

    const handleVerification = async (enteredCode) => {
        if (enteredCode === verificationCode) {
            alert('¡Verificación exitosa!');
            try {
                const response = await axios.post('http://localhost:3001/user/create', {
                    email: user.mail,
                    password: user.contraseña,
                    full_name: user.nombre,
                    age: user.edad,
                    dni: user.dni
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
        <section className="flex-grow-1 bg-grey container-fluid">
            <aside className="container-sm my-5">
                <RegisterCard handleRegister={handleRegister} />
            </aside>
            <VerificationModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                onSubmit={handleVerification}
            />
        </section>
    )
}
