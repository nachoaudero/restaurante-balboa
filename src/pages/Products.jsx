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
    <div>
      <ProductSection /> {/* Aquí se muestra el componente ProductSection */}
    </div>
  );
};
