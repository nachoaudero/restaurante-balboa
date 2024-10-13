import axios from 'axios';

// Función para obtener y formatear usuarios
export const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3001/user/find/all');
        // Formatear la lista de usuarios
        return response.data.map(user => ({
            id: user.id, // Mantener el ID original
            full_name: user.full_name, // Aquí puedes cambiar a full_name si es necesario
            email: user.email,
            is_admin: user.is_admin, // Cambia el nombre a is_admin si prefieres
        }));
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
};

export const updateAdminState = async (id, adminState) => {
    try {
        await axios.put(`http://localhost:3001/user/update/${id}`, { is_admin : !adminState })
    } catch (e) {
        console.log(`Error al cambiar el estado del usuario: ${e}`)
    }
}

