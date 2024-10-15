import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialProductState = {
    name: '',
    sale_price: '',
    cost: '',
    image_url: null,
    description: '',
    categoryId: 1, // Categoría por defecto: entrada
};

function AddEditProductModal({ show, handleClose, handleSaveProduct, productToEdit }) {
    const [product, setProduct] = useState(initialProductState);
    const [dragOver, setDragOver] = useState(false);

    // Cargar los datos del producto a editar, si existen
    useEffect(() => {
        if (productToEdit) {
            console.log(productToEdit)
            setProduct(productToEdit);
        } else {
            setProduct(initialProductState); // Reiniciar si no hay producto a editar
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        setProduct({
            ...product,
            image_file: file,
            image_url: URL.createObjectURL(file)
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        setProduct({
            ...product,
            image_url: URL.createObjectURL(file),
        });
    };

    const handleSubmit = () => {
        // Guardar o editar el producto
        handleSaveProduct(product);
        handleClose();
        setProduct(initialProductState);
    };

    return (
        <div className={`modal ${show ? 'd-block' : ''}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {productToEdit ? 'Editar Producto' : 'Agregar Producto'}
                        </h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sale_price" className="form-label">Precio de Venta</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="sale_price"
                                    name="sale_price"
                                    value={product.sale_price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cost" className="form-label">Precio de Compra</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cost"
                                    name="cost"
                                    value={product.cost}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Imagen del Producto</label>
                                <div
                                    className={`border p-3 ${dragOver ? 'bg-light' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={() => setDragOver(false)}
                                    onDrop={handleDrop}
                                >
                                    {product.image_url ? (
                                        <img src={product.image_url} alt="Producto" className="img-fluid" />
                                    ) : (
                                        <p>Arrastra una imagen o selecciona una desde tu equipo</p>
                                    )}
                                    <input
                                        type="file"
                                        className="form-control mt-2"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descripción</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows="2"
                                    maxLength="50"
                                    value={product.description}
                                    onChange={handleChange}
                                    required
                                />
                                <small className="form-text text-muted">
                                    Máximo 50 caracteres
                                </small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoryId" className="form-label">Categoría</label>
                                <select
                                    className="form-select"
                                    id="categoryId"
                                    name="categoryId"
                                    value={product.categoryId}
                                    onChange={handleChange}
                                >
                                    <option value="1">Entrada</option>
                                    <option value="2">Plato Principal</option>
                                    <option value="3">Salsa</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            {productToEdit ? 'Guardar Cambios' : 'Agregar Producto'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEditProductModal;