import { useState } from "react";
import axios from "axios";
import VerificationModal from "../components/VerificationModal.jsx";
import { useNavigate } from "react-router-dom";
import { RegisterCard } from "../components/RegisterCard.jsx";

export const Register = () => {
    const [user, setUser] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [verificationCode, setVerificationCode] = useState('');
    const navigate = useNavigate();
    const dbhost = import.meta.env.VITE_BACK_HOST;

    const generateCode = () => {
        const code = Math.floor(100000 + Math.random() * 900000);
        setVerificationCode(code.toString())
        return code.toString()
    };

    const handleVerification = async (enteredCode) => {
        if (enteredCode === verificationCode) {
            alert('¡Verificación exitosa!');
            try {
                const response = await axios.post(`${dbhost}user/create`, {
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
                <RegisterCard setShowModal={setShowModal} generateCode={generateCode} setUser={setUser} />
            </aside>
            <VerificationModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                onSubmit={handleVerification}
            />
        </section>
    )
}
