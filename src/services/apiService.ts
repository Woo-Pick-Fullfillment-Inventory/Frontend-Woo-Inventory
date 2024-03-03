import axios, { CreateAxiosDefaults } from 'axios';
import * as Keychain from 'react-native-keychain';

export const ApiService = async (customConfig?: CreateAxiosDefaults) => {
  const instance = axios.create({
    baseURL: 'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1',
    headers: {
      'content-type': 'application/json',
    },
    ...customConfig,
  });

  const token = await Keychain.getGenericPassword();

  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      if (token) {
        // config.headers.Authorization = token.password;
        config.headers.Authorization =
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjRkMThjZC1jMDNiLTQzNmEtODFhZC02Y2RhOTdjMjUyNWEiLCJpYXQiOjE3MDkzMDk4Nzd9.8bDo05dHsKiaPD3MkaN_kGU4FzDP4beDxnZZnbjjuag';
      }
      console.log('🚀 ~ ApiService ~ config:', config);
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return instance;
};
