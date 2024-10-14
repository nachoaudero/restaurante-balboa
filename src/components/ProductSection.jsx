import '../assets/styles/Products.css';
import papasFritasImg from '../assets/images/img.png';

const productData = [
    {
        sectionName: 'ENTRADAS',
        products: [
            {
                title: 'Papas Fritas',
                subtitle: 'Crujientes y deliciosas',
                description: 'Lorem ipsum es simplemente el texto de relleno de las imprentas.',
                imageUrl: papasFritasImg,
                price: '$5.00',
            },
            {
                title: 'Alitas de Pollo',
                subtitle: 'Jugosas y sabrosas',
                description: 'Lorem ipsum es simplemente el texto de relleno de las imprentas.',
                imageUrl: papasFritasImg,
                price: '$8.00',
            },
        ],
    },
    {
        sectionName: 'ESPECIALIDADES',
        products: [
            {
                title: 'Pasta Alfredo',
                subtitle: 'Cremosa y deliciosa',
                description: 'Lorem ipsum es simplemente el texto de relleno de las imprentas.',
                imageUrl: papasFritasImg,
                price: '$12.00',
            },
        ],
    },
];

// Definición del componente
const ProductSection = () => {
    return (
        <div id="product-sections">
            {productData.map((section, index) => (
                <div key={index} className="section">
                    <div key={index} className="section-title-container">
                        <h2>{section.sectionName}</h2>
                    </div>
                    <div className="products-container">
                        {section.products.map((product, idx) => (
                            <div key={idx} className="product-card">
                                <img src={product.imageUrl} alt={product.title} />
                                <h3 className="product-card-tittle">{product.title}</h3>
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
