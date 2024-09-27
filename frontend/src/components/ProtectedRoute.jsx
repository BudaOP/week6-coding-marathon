import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
    // return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
