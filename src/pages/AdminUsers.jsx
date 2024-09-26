const AdminUsers = () => {
    // Datos ficticios de usuarios
    const users = [
        { id: 1, name: "Juan Pérez", email: "juan@example.com", isAdmin: false },
        { id: 2, name: "María García", email: "maria@example.com", isAdmin: true },
        // ... más datos de usuarios ficticios
    ];

    const handleMakeAdmin = (id) => {
        console.log(`Usuario con ID ${id} ahora es administrador`);
        // Aquí iría la lógica para actualizar el estado del usuario en el backend
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
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => handleMakeAdmin(user.id)}>
                                {user.isAdmin ? "Sí" : "No"}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsers;