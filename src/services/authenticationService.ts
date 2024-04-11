import { ApiService } from './apiService';

export const authenticationService = {
  signin: async (data: { email: string; password: string }) => {
    const res = (await ApiService()).post('/signin', data);
    return res;
  },
  signout: async (data: { email: string; password: string }) => {
    const res = (await ApiService()).post('/signout', data);
    return res;
  },
};
