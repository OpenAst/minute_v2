import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../../api/api';

export const googleAction = createAsyncThunk(
    'auth/google',
    async (_, { isRejectedWithValue }) => {
        try {
            //  get the access token from google and send it to the backend
            const response = await post('/auth/o/google-oauth2/');
            return response.data;
        }
        catch (error) {
            return isRejectedWithValue(error.response.data);
        }
    }
);
