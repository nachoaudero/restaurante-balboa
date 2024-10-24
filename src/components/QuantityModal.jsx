import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const QuantityModal = ({ show, onHide, onAddToCart, product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAccept = () => {
        if (onAddToCart) {
            onAddToCart(product, quantity); // Pasa el producto y la cantidad seleccionada al carrito
        } else {
            console.error("onAddToCart no es una función válida");
        }
        onHide();  // Cierra el modal
    };

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Selecciona la cantidad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={decrement}>-</Button>
                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                    <Button onClick={increment}>+</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cerrar</Button>
                <Button variant="primary" onClick={handleAccept}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default QuantityModal;
