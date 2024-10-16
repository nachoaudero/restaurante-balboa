import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, isAdmin }) => {
  if (isAuthenticated && isAdmin) {
    return <Navigate to="/admin/products" />
  }

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
