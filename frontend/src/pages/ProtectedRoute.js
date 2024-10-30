import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProtectedRoute = ({children, redirectPath='/'}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("Authenticated:", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;