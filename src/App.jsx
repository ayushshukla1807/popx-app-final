import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Profile } from './pages/Profile';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <ProtectedRoute requireAuth={false}><Landing /></ProtectedRoute>
        } />
        <Route path="/login" element={
          <ProtectedRoute requireAuth={false}><Login /></ProtectedRoute>
        } />
        <Route path="/register" element={
          <ProtectedRoute requireAuth={false}><Signup /></ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute requireAuth={true}><Profile /></ProtectedRoute>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AnimatedRoutes />
          <Toaster position="top-center" toastOptions={{ className: 'text-sm' }} />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
