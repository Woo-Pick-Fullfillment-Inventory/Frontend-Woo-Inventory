// authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  status: string;
  jwtToken: any;
  isLoggedIn: boolean;
}

export interface SigninPayload {
  emailOrUsername: string;
  password: string;
}

export interface SignupPayload {
  appURL: string;
  email: string;
  password: string;
  token: string;
}

const initialState: InitialState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  jwtToken: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signin.pending, state => {
        state.status = 'loading';
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        console.log("success action payload ", action.payload);
        
        state.jwtToken = action.payload.jwtToken;
      })
      .addCase(signin.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(signup.pending, state => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state) => {
        state.status = 'failed';
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
        console.log('errorDetail is ', errorDetail);
        
        return rejectWithValue(errorDetail);
      }
    } catch (error: any) {
      // handle other type of error such as network error
      console.log('error in signin call ', error);
      return rejectWithValue(error.message);
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
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
