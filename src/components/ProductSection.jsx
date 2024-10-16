import '../assets/styles/Products.css';
import {fetchProductsByCategory} from "../utilities/productUtilities.jsx";
import {useEffect, useState} from "react";


// Definición del componente
const ProductSection = () => {
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProductsByCategory();
            setProductsByCategory(fetchedProducts)
        }
        loadProducts().catch(error => {
            console.log(`Error al cargar productos: ${error}`)
        })
    })

    return (
        <div id="product-sections">
            {productsByCategory.map((category, index) => (
                <div key={index} className="section">
                    <div key={index} className="section-title-container">
                        <h2>{category.name}</h2>
                    </div>
                    <div className="products-container">
                        {category.products.map((product, idx) => (
                            <div key={idx} className="product-card">
                                <img src={product.image_url} alt={product.name} />
                                <h3 className="product-card-tittle">{product.name}</h3>
                                <p className="product-card-text">{product.description}</p>
                                <button>Agregar al carrito</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSection;
