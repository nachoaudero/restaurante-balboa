import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
