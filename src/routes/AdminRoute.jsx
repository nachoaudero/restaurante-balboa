import { Navigate, Outlet } from 'react-router-dom';

export const AdminRoute = ({ isAuthenticated, isAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return isAdmin ? <Outlet /> : <Navigate to="/" />
}
