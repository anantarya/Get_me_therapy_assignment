// slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: null,
    loading: false,
    status: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: (state, action) => {

            state.user = action.payload;
            state.loading = false;
            state.status = true;

        },

        logout: (state) => {
            state.user = null;
            state.status = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
