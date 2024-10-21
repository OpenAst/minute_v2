import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../../api/api';

// Create a thunk for email verification
export const verifyAction = createAsyncThunk(
    'auth/registration/account-verify-email/<str:key>/',
    async (token, { rejectWithValue }) => {
        try {
            const response = await post(`/api/verify-email`, { token });
            return response.data; // Return a success message if verification succeeds
        } catch (error) {
            return rejectWithValue(error.response.data); // Return the error message if verification fails
        }
    }
);
