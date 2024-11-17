import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from "./pages/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Protected route */}
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} 
            
          />
          
        </Routes>
      </Router>
  );
};

export default App;
