import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children, requireAuth = true }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (requireAuth && !session) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && session) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};
