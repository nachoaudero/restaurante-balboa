import {useEffect, useState} from "react";
import {fetchProducts, saveProduct} from "../utilities/productUtilities.jsx";
import AddProductModal from "../components/ModalAddProduct.jsx";
import axios from "axios";

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);


    const handleAddProduct = (newProduct) => {
        saveProduct(newProduct, false).catch(e => {
            console.log(`Ocurrio un error: ${e}`)
        })
    };

    const handleEditProduct = (updatedProduct) => {
        saveProduct(updatedProduct, true).catch(e => {
            console.log(`Ocurrio un error: ${e}`)
        })
    };

    const handleSaveProduct = (product) => {
        if (productToEdit) {
            handleEditProduct(product);
            window.location.reload()
        } else {
            handleAddProduct(product);
            window.location.reload()
        }
    };

    const handleViewImage = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

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

    const handleDeleteProduct = async (id) => {
        const response = await axios.patch(`http://localhost:3001/product/delete/${id}`)
        console.log(response)
        window.location.reload()
    };

    return (
        <div className="products-view">
            <h2>Productos</h2>
            <button
                className="btn btn-primary mb-3"
                onClick={() => {
                    setProductToEdit(null);
                    setShowAddProductModal(true)
                }}
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
                                onClick={() => {
                                    setProductToEdit(product)
                                   setShowAddProductModal(true)
                                }}
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

            <AddProductModal
                show={showAddProductModal}
                handleClose={() => setShowAddProductModal(false)}
                handleSaveProduct={handleSaveProduct}
                productToEdit={productToEdit}
            />

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