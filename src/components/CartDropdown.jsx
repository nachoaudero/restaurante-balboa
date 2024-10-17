import React from 'react';
import './CartDropdown.css'; // Importa el archivo CSS

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
        </div>
    );
}

export default CartDropdown;
