import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, redirectPath='/'}) => {
  const isAuthenticated = !!localStorage.getItem('key');

  return isAuthenticated ? children : <Navigate to={redirectPath} />;
  
};

export default ProtectedRoute;