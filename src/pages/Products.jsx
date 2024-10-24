import { Card } from '../components/Card.jsx';
import { useProducts } from "../hooks/useProducts.js";
import { Error } from './Error.jsx';
import { Loading } from "./Loading.jsx";

export const Products = () => {
  const { productsByCategory, loading, error } = useProducts()


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
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
                <Card product={product} key={product.id} />
              ))}
            </div>
          </section>
        </article>
      ))}
    </section>
  );
};
