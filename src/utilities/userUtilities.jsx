import axios from 'axios';

const dbhost = import.meta.env.VITE_BACK_HOST;

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${dbhost}user/find/all`);
        return response.data.map(user => ({
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            is_admin: user.is_admin,
        }));
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
};

export const updateAdminState = async (id, adminState) => {
    try {
        await axios.put(`${dbhost}user/update/${id}`, { is_admin : !adminState })
    } catch (e) {
        console.log(`Error al cambiar el estado del usuario: ${e}`)
    }
}

