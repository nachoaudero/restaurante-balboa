import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../utilities/productUtilities.jsx";
import { Card } from '../components/Card.jsx';

export const Products = () => {
  const [productsByCategory, setProductsByCategory] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProductsByCategory();
      setProductsByCategory(fetchedProducts)
    }
    loadProducts().catch(error => {
      console.log(`Error al cargar productos: ${error}`)
    })
  }, [])

  return (
    <section className='flex-grow-1 bg-grey'>
      {productsByCategory.map((category, index) => (
        <article key={index} className="container-fluid p-0">
          <header className="text-center bg-second-1 cl-white py-3">
            <p className="mb-0 h2">{category.name}</p>
          </header>
          <section className="container-xl">
            <div className="row justify-content-around">
              {category.products.map((product, idx) => (
                <Card product={product} idx={idx} />
              ))}
            </div>
          </section>
        </article>
      ))}
    </section>
  );
};
