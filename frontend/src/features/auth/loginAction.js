import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../../api/api';

export const loginAction = createAsyncThunk(
    'auth/login/',
    async ({
        email, password
    }, { rejectWithValue }) => {
        try {
            // Use 'post' from api.js instead of axios
            const response = await post('auth/login/', {
                email,
                password,
            });
            console.log("Successful", response.data);
            return response.data;
        }
        catch (error) {
            console.log("Error", error.response);
            return rejectWithValue(error.response.data);
        }
    }
);
