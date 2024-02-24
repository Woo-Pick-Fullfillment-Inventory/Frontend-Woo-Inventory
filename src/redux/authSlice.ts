// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  // jwtToken: any;
  isLoggedIn: boolean;
}

export interface SigninPayload {
  emailOrUsername: string;
  password: string;
}

export interface SignupPayload {
  appURL: string;
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  token: string;
}

const initialState: InitialState = {
  // jwtToken: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    // setJWTToken: (state, action) => {
    //   state.jwtToken = action.payload;
    // },
    logout: state => {
      state.isLoggedIn = false;
      // state.jwtToken = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signin.fulfilled, (state) => {
        state.isLoggedIn = true;
        // state.jwtToken = action.payload.jwtToken;
      })
      .addCase(signup.fulfilled, state => {
        state.isLoggedIn = true;
      });
  },
});

export const signin = createAsyncThunk(
  'auth/signin',
  async ({ emailOrUsername, password }: SigninPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signin',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            emailOrUsername,
            password,
          }),
        },
      );

      if (!response.ok) {
        const rejectedResponse = await response.json();
        return rejectWithValue(rejectedResponse);
      } 

      return await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (
    {
      appURL,
      email,
      username,
      password,
      passwordConfirmation,
      token,
    }: SignupPayload,
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
            username,
            password,
            passwordConfirmation,
            token,
          }),
        },
      );

      if (response.ok) {
        // If the response is OK, assume it's JSON
        return await response.json();
      } else {
        // If the response is not OK, handle both JSON and non-JSON responses
        // can be logic problem or server problem
        const contentType = response.headers.get('content-type');
        let errorDetail;
        if (contentType && contentType.includes('application/json')) {
          errorDetail = await response.json();
        } else {
          errorDetail = await response.text();
        }
        return rejectWithValue(errorDetail);
      }
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const { setIsLoggedIn, logout } = authSlice.actions; // export setJWTToken
export default authSlice.reducer;
