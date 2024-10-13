import {useEffect, useState} from "react";
import {fetchUsers, updateAdminState} from "../utilities/userUtilities.jsx";

const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers)
        }
        loadUsers().catch(error => {
            console.log(`Error al cargar usuarios: ${error}`)
        })
    },[])


    const handleMakeAdmin = (id, adminState) => {
        updateAdminState(id, adminState).catch(error => {
            console.log(`Error al cambiar el estado del usuario: ${error}`)
        })
    };

    const openModal = (user) => {
        setSelectedUser(user); // Guarda el usuario seleccionado
        setIsModalOpen(true); // Abre el modal
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    // Función para confirmar el cambio
    const confirmChange = () => {
        if (selectedUser) {
            handleMakeAdmin(selectedUser.id, selectedUser.is_admin);
            selectedUser.is_admin = !selectedUser.is_admin
            closeModal();
        }
    };

    return (
        <div className="users-view">
            <h2>Usuarios</h2>
            <table>
                <thead>
                <tr>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                    <th>Administrador</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.full_name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => openModal(user)}>
                                {user.is_admin ? "Sí" : "No"}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmación</h5>
                            </div>
                            <div className="modal-body">
                                <p>¿Deseas realizar este cambio?</p>
                                {selectedUser && (
                                    <p>
                                        {selectedUser.full_name} es administrador: {!selectedUser.is_admin ? "Sí" : "No"}
                                    </p>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    No
                                </button>
                                <button type="button" className="btn btn-primary" onClick={confirmChange}>
                                    Sí
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;