import {useEffect, useState} from "react";
import {fetchProducts} from "../utilities/productUtilities.jsx";

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Función para abrir el modal con la imagen seleccionada
    const handleViewImage = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };


    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts)
        }
        loadProducts().catch(error => {
            console.log(`Error al cargar productos: ${error}`)
        })
    },[])

    const handleEditProduct = (id) => {
        console.log(`Editar producto con ID ${id}`);
    };

    const handleDeleteProduct = (id) => {
        console.log(`Eliminar producto con ID ${id}`);
    };

    const handleAddProduct = () => {

    }

    return (
        <div className="products-view">
            <h2>Productos</h2>

            {/* Botón de Agregar Producto */}
            <button
                className="btn btn-primary mb-3"
                onClick={handleAddProduct}
            >
                Agregar Producto
            </button>

            <table className="table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.sale_price}</td>

                        <td>
                            <button
                                className="btn btn-info"
                                onClick={() => handleViewImage(product.image_url)}
                            >
                                <i className="bi bi-eye"></i> {/* Icono de ojo */}
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-warning me-2"
                                onClick={() => handleEditProduct(product.id)}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteProduct(product.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {selectedImage && (
                <div
                    className={`modal ${showModal ? 'd-block' : ''}`}
                    tabIndex="-1"
                    onClick={handleCloseModal}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Vista previa de la imagen</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src={selectedImage}
                                    alt="Producto"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default AdminProducts;