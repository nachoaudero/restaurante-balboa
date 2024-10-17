import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../utilities/productUtilities.jsx";
import { Card } from '../components/Card.jsx';

export const Products = () => {
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

    const handleAddToCart = (order) => {
        // Aquí puedes manejar la lógica para agregar al carrito
        console.log('Producto agregado al carrito:', order);
        setSuccessMessage(`Producto ${order.product.name} agregado al carrito!`); // Establece el mensaje de éxito

        // Opcionalmente, puedes ocultar el mensaje después de un tiempo
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000); // Oculta el mensaje después de 3 segundos
    };

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProductsByCategory();
            setProductsByCategory(fetchedProducts);
        };
        loadProducts().catch(error => {
            console.log(`Error al cargar productos: ${error}`);
        });
    }, []);

    return (
        <section className='flex-grow-1 bg-grey'>
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            {productsByCategory.map((category) => (
                <article key={category.id} className="container-fluid p-0">
                    <header className="text-center bg-second-1 cl-white py-3">
                        <p className="mb-0 h2">{category.name}</p>
                    </header>
                    <section className="container-xl">
                        <div className="row justify-content-around">
                            {category.products.map((product) => (
                                <Card
                                    product={product}
                                    key={product.id}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    </section>
                </article>
            ))}
        </section>
    );
};
