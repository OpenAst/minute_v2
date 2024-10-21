import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from "./pages/ProtectedRoute";
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResetPassword from "./pages/ResetPassword";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/reset-password-change" element={<ResetPassword />} />
          {/* Protected route */}
          <Route 
            path="/" 
            element={<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
          
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
