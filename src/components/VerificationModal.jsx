import { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const VerificationModal = ({ show, handleClose, onSubmit }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        const newCode = [...code];
        newCode[index] = value;

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        } else if (!value) {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }

        setCode(newCode);
    };

    useEffect(() => {
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
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="form-control mx-1"
                            style={{ width: '40px', textAlign: 'center' }}
                            ref={(el) => (inputRefs.current[index] = el)}
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