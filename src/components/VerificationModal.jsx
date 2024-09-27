import { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const VerificationModal = ({ show, handleClose, onSubmit }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        const newCode = [...code];
        newCode[index] = value;

        // Si se ingresa un número, pasar al siguiente input automáticamente
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        } else if (!value) {
            // Si se borra un número, volver al anterior (a menos que esté en el primer input)
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }

        setCode(newCode);
    };

    useEffect(() => {
        // Limpiar el código cuando se cierra el modal
        if (!show) {
            setCode(['', '', '', '', '', '']);
        }
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Introduce el código que enviamos a tu casilla</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="number"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="form-control mx-1"
                            style={{ width: '40px', textAlign: 'center' }}
                            ref={(el) => (inputRefs.current[index] = el)} // Almacenar referencias de los inputs
                        />
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button
                    style={{ backgroundColor: '#e74c3c', borderColor: '#e74c3c' }}
                    onClick={() => onSubmit(code.join(''))}
                >
                    Verificar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VerificationModal;