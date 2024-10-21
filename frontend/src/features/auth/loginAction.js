import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { post } from '../../api/api';

export const loginAction = createAsyncThunk(
    'auth/login',
    async ({
        email, password
    }, { isRejectedWithValue }) => {
        try {
            // Use 'post' from api.js instead of axios
            const response = await post('auth/login', {
                email,
                password,
            });
            return response.data;
        }
        catch (error) {
            return isRejectedWithValue(error.response.data);
        }
    }
);
