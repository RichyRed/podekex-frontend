import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  date:null,
  user:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    isLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.date = new Date();
    },
    logout: (state) => {
        state.isAuthenticated = false;
        state.date = null;
        state.user = null;
    }
  },
})

export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer