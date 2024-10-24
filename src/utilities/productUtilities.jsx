import axios from "axios";


const dbhost = import.meta.env.VITE_BACK_HOST;
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${dbhost}product/find/all`);
        return mapProducts(response.data)
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
        return [];
    }
};

function mapProducts(response) {
    return response.map(product => ({
        id: product.id,
        name: product.name,
        sale_price: product.sale_price,
        image_url: product.image_url,
        description: product.description,
        cost: product.cost,
        categoryId: product.category ? product.category.id : null,
    }))
}

export const fetchProductsByCategory = async () => {
    try {
        const response = await axios.get(`${dbhost}product/fetchByCategory`);
        const fetchedProducts = response.data.map(category => ({
            id: category.id,
            name: category.name,
            products: mapProducts(category.products)
        }));
        return fetchedProducts
    } catch (error) {
        console.error('Error al obtener productos por categoria:', error.message);
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
            await axios.put(`${dbhost}product/update/${product.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } else {
            await axios.post(`${dbhost}product/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        }
    } catch (error) {
        console.error('Error al guardar el producto:', error.message);
    }
};
