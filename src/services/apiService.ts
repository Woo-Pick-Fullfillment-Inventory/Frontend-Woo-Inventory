import axios, { AxiosError, AxiosResponse, CreateAxiosDefaults } from 'axios';
import * as Keychain from 'react-native-keychain';
// TODO: complete this

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
        config.headers.Authorization = token.password;
      }

      return config;
    },
    function (error) {
      // Do something with request error
      console.log('🚀 ~ ApiService ~ error:', error);
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error: AxiosError) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return instance;
};
