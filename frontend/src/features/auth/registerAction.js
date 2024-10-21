import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { post } from '../../api/api';

export const registerAction = createAsyncThunk('auth/registration/', async ({
    email, password, username
}, {isRejectedWithValue }) => {
    try {
        const response = await post('auth/registration/', {email, password, username});
        return response.data;

    } catch(error) {
        return isRejectedWithValue(error.response.data);
    }
});

