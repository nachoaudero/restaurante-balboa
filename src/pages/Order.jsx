import React, { useEffect, useState } from 'react';

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Asegúrate de que este endpoint sea correcto
        if (!response.ok) {
          throw new Error('Error al cargar órdenes');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError(error.message); // Captura el error
      }
    };

    fetchOrders();
  }, []);

  return (
      <div>
        <h2>Órdenes</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el error si ocurre */}
        <ul>
          {orders.map(order => (
              <li key={order.id}>
                Producto ID: {order.productId}, Cantidad: {order.quantity}, Fecha: {new Date(order.createdAt).toLocaleString()}
              </li>
          ))}
        </ul>
      </div>
  );
};