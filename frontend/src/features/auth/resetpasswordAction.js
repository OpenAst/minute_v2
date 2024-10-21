import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../../api/api';

export const resetPasswordAction = createAsyncThunk(
  'auth/resetPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await post('/auth/password/reset/', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);    }
  }
)