import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { changePasswordAction } from '../features/auth/changePasswordAction';

const ResetPasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
     
      if (newPassword !== confirmPassword) {
        alert("Passwords don't match!");
      }
      else {
        dispatch(changePasswordAction({oldPassword, newPassword}));
        
        setTimeout(() => {
          navigate('/login');
        })
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
              className="form-control w-full p-2 border rounded"
              type="password"
              name="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
                className="form-control w-full p-2 border mt-3 rounded"
                type="password"
                name="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
          </FormGroup>
          <FormGroup>
            <Input
                className="form-control w-full p-2 border mt-3 rounded"
                type="password"
                name="password"
                placeholder="Confirm New Password"
                value={newPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
