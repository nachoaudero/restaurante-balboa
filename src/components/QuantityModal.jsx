import React, { useEffect, useState } from 'react';

const QuantityModal = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Resetea la cantidad a 1 cada vez que el modal se abra
        if (isOpen) {
            setQuantity(1);
        }
    }, [isOpen]);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => Math.max(prev - 1, 1)); // Evita que sea menor a 1
    };

    const handleAccept = () => {
        const order = {
            product: product, // Asegúrate de que esto tenga la referencia correcta al producto
            quantity: quantity // Asegúrate de que 'quantity' tenga el valor correcto
        };
        onAddToCart(order); // Llama a la función que maneja la adición al carrito
        onClose(); // Cierra el modal
    };


    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{product.name}</h2>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleAccept}>Aceptar</button>
            </div>
        </div>
    );
};

export default QuantityModal;
