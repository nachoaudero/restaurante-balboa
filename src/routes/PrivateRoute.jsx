import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const PrivateRoute = () => {
  const { userData } = useContext(UserContext)

  if (!userData.isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
