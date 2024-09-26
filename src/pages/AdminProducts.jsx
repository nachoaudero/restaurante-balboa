const AdminProducts = () => {
    // Datos ficticios de productos
    const products = [
        { id: 1, name: "Producto A", price: 10, image: "link/to/image1" },
        { id: 2, name: "Producto B", price: 20, image: "link/to/image2" },
    ];

    const handleEditProduct = (id) => {
        console.log(`Editar producto con ID ${id}`);
    };

    const handleDeleteProduct = (id) => {
        console.log(`Eliminar producto con ID ${id}`);
    };

    return (
        <div className="products-view">
            <h2>Productos</h2>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <img src={product.image} alt={product.name} width={50} />
                        </td>
                        <td>
                            <button onClick={() => handleEditProduct(product.id)}>Editar</button>
                            <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProducts;