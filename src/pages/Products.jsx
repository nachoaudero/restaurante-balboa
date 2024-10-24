import { Card } from '../components/Card.jsx';
import { useProducts } from "../hooks/useProducts.js";
import { Error } from './Error.jsx';
import { Loading } from "./Loading.jsx";
import { useCart } from '../hooks/useCart.js'; // Asegúrate de tener un hook para el carrito

export const Products = () => {
  const { productsByCategory, loading, error } = useProducts();
  const { addToCart } = useCart(); // Hook para agregar productos al carrito

  const handleAddToCart = (order) => {
    addToCart(order); // Función que agrega el producto al carrito
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
      <section className='flex-grow-1 bg-grey'>
        {productsByCategory.map((category) => (
            <article key={category.id} className="container-fluid p-0">
              <header className="text-center bg-second-1 cl-white py-3">
                <p className="mb-0 h2">{category.name}</p>
              </header>
              <section className="container-xl">
                <div className="row justify-content-around">
                  {category.products.map((product) => (
                      <Card product={product} key={product.id} onAddToCart={handleAddToCart} />
                  ))}
                </div>
              </section>
            </article>
        ))}
      </section>
  );
};
