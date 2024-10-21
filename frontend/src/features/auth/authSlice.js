import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from './loginAction';
import { logoutAction } from './logoutAction';
import { registerAction } from './registerAction';
import { verifyAction } from './verifyAction';
import { googleAction } from './googleAction';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Synchronous reducers
        setAuth: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        resetAuth: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },

    },
    extraReducers: (builder) => {
        // Asynchronous actions
        builder
        .addCase(loginAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        })
        .addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(logoutAction.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        })
        .addCase(registerAction.fulfilled, (state, action) => {
            state.loading = true;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        })
        .addCase(registerAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(verifyAction.pending, (state) => {
            state.loading = true;
        })
        .addCase(verifyAction.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase(verifyAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(googleAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(googleAction.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
        })
        .addCase(googleAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});     


export const { setAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;