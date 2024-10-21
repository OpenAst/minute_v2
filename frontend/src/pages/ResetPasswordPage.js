import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap';
import { resetPasswordAction } from '../features/auth/resetpasswordAction';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const result = dispatch(resetPasswordAction({ email }));
      if (result.error) {
        return;
      }
      else {
        navigate('/reset-password-change');
      }
    } catch (error) {

    }

  };

  return (
    <Container className="mt-5 flex justify-center items-center min-h-screen">
      <div className="p-5 shadow-lg rounded-lg">
        <h2 className="text-center">Reset Password</h2>
        <Form onSubmit={handleSubmit} className="mt-4">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <Button color="primary" className="text-red-500 w-full mt-3" type="submit">
            Reset Password
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ResetPasswordPage;
