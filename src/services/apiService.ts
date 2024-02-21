import axios, { CreateAxiosDefaults } from 'axios';

export const ApiService = (customConfig?: CreateAxiosDefaults) => {
  const instance = axios.create({
    baseURL: 'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1',
    headers: { 'X-Custom-Header': 'foobar' },
    ...customConfig,
  });

  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
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
