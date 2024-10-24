import { useState } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState([]); // Estado para almacenar los productos del carrito

    const addToCart = (order) => {
        // Aquí puedes agregar lógica para evitar duplicados o sumar cantidades
        const existingProduct = cart.find(item => item.product.id === order.product.id);
        if (existingProduct) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            setCart(cart.map(item =>
                item.product.id === order.product.id
                    ? { ...existingProduct, quantity: existingProduct.quantity + order.quantity }
                    : item
            ));
        } else {
            setCart(prevCart => [...prevCart, order]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.product.id !== productId)); // Elimina el producto del carrito
    };

    return {
        cart,
        addToCart,
        removeFromCart,
    };
};
