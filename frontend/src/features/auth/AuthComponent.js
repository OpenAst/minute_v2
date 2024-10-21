import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

const AuthComponent = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    
    const handleLogin = () => {
        // Getting data from form
    }
}
