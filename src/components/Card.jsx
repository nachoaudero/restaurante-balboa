import React, { useState } from 'react';
import QuantityModal from './QuantityModal';

export const Card = ({ product, idx, onAddToCart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="col-sm-6 col-md-4 col-xl-3 p-3">
            <div key={idx} className="bg-second-1 card border-0">
                <img src={product.image_url} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title cl-white mb-0">{product.name}</h3>
                    <p className="card-text cl-white fw-light mb-2">
                        {product.description}<br />
                        <span className="fw-bolder fs-4">${product.sale_price}</span>
                    </p>
                    <button className="btn btn-hover bg-grey cl-black" onClick={handleOpenModal}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <QuantityModal
                product={product}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddToCart={onAddToCart} // Asegúrate de pasar la función aquí
            />
        </div>
    );
};
