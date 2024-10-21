import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { post } from '../../api/api';

export const logoutAction = createAsyncThunk('auth/logout', async (_, { isRejectedWithValue }) => {
    try {
        await post('api/logout');
        return true; // Clear session after successful logout
    } catch (error) {
        return isRejectedWithValue(error.responsse.data);
    }
});