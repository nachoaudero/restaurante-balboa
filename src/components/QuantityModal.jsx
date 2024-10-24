import React, { useState } from "react";

const QuantityModal = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAccept = () => {
        const order = {
            product: product,
            quantity: quantity,
        };
        onAddToCart(order); // Llama a la función para agregar el producto al carrito
        onClose(); // Cierra el modal
        setQuantity(1); // Resetea la cantidad
    };

    if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>{product.name}</h3>
                <div className="quantity-container">
                    <span className="quantity">{quantity}</span>
                    <div className="quantity-controls">
                        <button className="circle-button add-button" onClick={() => setQuantity(quantity + 1)}>+</button>
                        <button className="circle-button subtract-button" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    </div>
                </div>
                <button onClick={handleAccept}>Aceptar</button> {/* Asegúrate de que esto llama a handleAccept */}
            </div>
        </div>
    );
};

export default QuantityModal;
