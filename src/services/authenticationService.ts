import { SigninPayload, SignupPayload } from 'src/types/authentication';
import { ApiService } from './apiService';

export const authenticationService = {
  signin: async (data: SigninPayload) => {
    const res = (await ApiService()).post('/auth/signin', data);
    return res;
  },
  signup: async (data: SignupPayload) => {
    const res = (await ApiService()).post('/auth/signup', data);
    return res;
  },
  signout: async (data: { email: string; password: string }) => {
    const res = (await ApiService()).post('/signout', data);
    return res;
  },
};
