// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  userData: unknown;
  loading: boolean;
  error: unknown;
  isLoggedIn: boolean;
}

export interface SigninPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  appURL: string;
  email: string;
  password: string;
  token: string;
}

const initialState: InitialState = {
  userData: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signin.pending, state => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, state => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const signin = createAsyncThunk(
  'auth/signin',
  async ({ email, password }: SigninPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signin',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (
    { appURL, email, password, token }: SignupPayload,
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(
        'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            appURL,
            email,
            password,
            token,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
