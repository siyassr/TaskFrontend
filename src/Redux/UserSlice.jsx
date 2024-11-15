import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import Cookies from "js-cookie"

const API_URL = import.meta.env.VITE_API_URL;


const initialState = {
    user: [],
    loading: false,
    isAuthenticated: false,
    error: null,
    

  };
  // axios.defaults.withCredentials =  true;
  export const signup = createAsyncThunk(
    "/signup",
    async (userData, { rejectWithValue }) => {  
        try {
            const response = await axios.post(`${API_URL}/signup`, userData);
            // localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            
            return rejectWithValue(error.response?.data || "An error occurred during signup");
        }
    }
);

export const signin = createAsyncThunk(
  "/signin",
  async (userData, { rejectWithValue }) => { 
      try {
          const response = await axios.post(`${API_URL}`, userData,{ withCredentials: true });
          // localStorage.setItem("user", JSON.stringify(response.data));
          return response.data;
      } catch (error) {
          return rejectWithValue(error.response?.data || "An error occurred during signup");
      }
  }
);


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      logout: (state) => {
        Cookies.remove("token"); 
        state.isAuthenticated = false;  
        state.user = null;  
        state.error = null; 
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(signup.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signup.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(signup.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(signin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signin.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(signin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });

    },
  });

  export const { logout } = userSlice.actions;
  
  export default userSlice.reducer;
  


