import React from 'react';
import { useCart } from '../hooks/useCart'; // Importa el hook useCart

export const Order = () => {
  const { cart, removeFromCart } = useCart(); // Obtiene el carrito y la función para eliminar productos

  return (
      <div className="flex-grow-1 container">
        <h2 className="text-center my-4">Orden de Compra</h2>
        {cart.length === 0 ? (
            <p className="text-center">No hay productos en el carrito.</p>
        ) : (
            <div>
              <div className="row">
                {cart.map((item) => (
                    <div key={item.product.id} className="col-md-4 mb-4">
                      <div className="card">
                        <img
                            src={import.meta.env.VITE_BACK_HOST + item.product.image_url}
                            alt={item.product.name}
                            className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.product.name}</h5>
                          <p className="card-text">
                            Cantidad: {item.quantity}<br />
                            Precio: ${item.product.sale_price.toFixed(2)}
                          </p>
                          <button
                              className="btn btn-danger"
                              onClick={() => removeFromCart(item.product.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
              <h3 className="text-end my-4">
                Total: $
                {cart.reduce((total, item) => total + item.product.sale_price * item.quantity, 0).toFixed(2)}
              </h3>
            </div>
        )}
      </div>
  );
};
