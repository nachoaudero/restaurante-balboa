import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const PublicRoute = () => {
  const { userData } = useContext(UserContext)

  if (userData.isAuthenticated && userData.isAdmin) {
    return <Navigate to="/admin/products" />
  }

  if (userData.isAuthenticated) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
