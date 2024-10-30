import React from 'react';
import { useState } from 'react';
import { loginAction } from '../features/auth/loginAction';
import { googleAction } from '../features/auth/googleAction';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, FormGroup, Input } from 'reactstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const result = dispatch(loginAction({ email, password }));
      if (result.error) {
        console.log(result.error.message);
      } else {
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const continueWithGoogle = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email%20profile`;
    window.location.href = authUrl;

    const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
    if (token) {
      dispatch(googleAction({ access_token: token }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <Container className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
      <p className="text-center mb-6">Sign into your Account</p>

      <Form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <Input
            className="form-control w-full p-2 border rounded"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="form-control w-full p-2 border rounded"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            required
          />
        </FormGroup>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </Form>
      <button
        className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
        onClick={continueWithGoogle}
      >
        Continue with Google
      </button>
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <Link className="text-blue-500 hover:underline" to="/register">
          Sign Up
        </Link>
      </p>
      <p className="text-center mt-2">
        Forgot your password?{' '}
        <Link className="text-blue-500 hover:underline" to="/reset-password">
          Reset Password
        </Link>
      </p>
    </Container>
  </div>  
);
};

export default LoginPage;
