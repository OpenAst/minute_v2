import React from 'react';
import { useState } from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../api/apiAuth';

const RegisterPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    try {
      const result = await register({ email, password}).unwrap();
      if (result) {
        // Redirect to home after successful registration
        navigate('/login');
      }
    }
    catch (error) {
      setError(err?.data?.message || 'Registration failed. Please try again.');
    }  
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
    <Container className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
      <Form onSubmit={handleSubmit} className='mt-3'>
        <FormGroup>
          <Input
            className='form-control w-full p-2 border rounded'
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='form-control w-full p-2 border rounded'
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required
        />
        </FormGroup>
        <FormGroup>
          <Input
            className='form-control w-full p-2 border rounded'
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm Password" 
          />
        </FormGroup>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          color='primary'
          type="submit"
          disabled={isLoading}
          >R{isLoading ? 'Registering...' : 'Register'}</button>
      </Form>
      <p className="text-center mt-4">
        Already have an account?{' '} <Link className='bg-red-300 p-2 rounded hover:underline-red' to='/login'>Login</Link>
      </p>
    </Container>
    </div>
  );
};

export default RegisterPage;