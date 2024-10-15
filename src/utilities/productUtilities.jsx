import axios from "axios";

export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/product/find/all');
        return response.data.map(product => ({
            id: product.id,
            name: product.name,
            sale_price: product.sale_price,
            image_url: product.image_url,
            description: product.description,
            cost: product.cost,
            categoryId: product.category.id,
        }));
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
};

export const fetchProductsByCategory = async () => {
    try {
        const response = await axios.get('http://localhost:3001/product/findByCategory/:categoryId');
        return response.data.map(product => ({
            id: product.id,
            name: product.name,
            sale_price: product.sale_price,
            image_url: product.image_url,
            description: product.description,
            cost: product.cost,
            categoryId: product.categoryId
        }));
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
}

export const saveProduct = async (product, is_update) => {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('sale_price', product.sale_price);
    formData.append('cost', product.cost);
    formData.append('description', product.description);
    formData.append('categoryId', product.categoryId);

    if (product.image_file) {
        formData.append('image', product.image_file); // Enviar el archivo de imagen real
    }

    try {
        if (is_update) {
            await axios.put(`http://localhost:3001/product/update/${product.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } else {
            await axios.post('http://localhost:3001/product/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        }
    } catch (error) {
        console.error('Error al guardar el producto:', error);
    }
};