import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

export const AdminRoute = () => {
  const { userData } = useContext(UserContext)

  if (!userData.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userData.isAuthenticated && !userData.isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />
}
