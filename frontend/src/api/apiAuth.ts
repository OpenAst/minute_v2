import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the API slice
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers) => {
            const key = localStorage.getItem('AUTH_KEY');
            if (key) {
                headers.set('Authorization', 'Token ${key}');
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login/',
                method: 'POST',
                body: credentials,
            }),
            onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('key', data.key);
                } catch (error) {
                    console.error('Login failed', error);
                }
            },
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'register/',
                method: 'POST',
                body: data,
            }),
        }),
        googleLogin: builder.mutation({
            query: (googleToken) => ({
                url: 'google-login/',
                method: 'POST',
                body: { token: googleToken },
            }),
        }),
        getUser: builder.query({
            query: () => 'user/',
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            onQueryStarted: async (args, {dispatch, queryFulfilled}) => {
                try {
                    await queryFulfilled;
                    localStorage.removeItem('key');
                } catch (error) {
                    console.error('Logour failed', error);
                }
            },
        }),
    }),
});

export const { useLoginMutation,
     useRegisterMutation, 
     useGetUserQuery,
     useGoogleLoginMutation,
    useLogoutMutation } = authApi;