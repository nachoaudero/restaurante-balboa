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
            categoryId: product.categoryId,
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
            categoryId: (product.categoryId)


        }));
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
}