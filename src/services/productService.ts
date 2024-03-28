import axios from 'axios';
import { ApiService } from './apiService';

export const productService = {
  getProducts: async (
    data = {
      sorting_criteria: {
        field: 'id',
        direction: 'asc',
      },
      pagination_criteria: {
        limit: 10,
      },
    },
  ) => {
    // const res = (await ApiService()).post('/products:search', {});
    // return res;
    console.log('vao');

    try {
      const response = await fetch(
        'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/products:search',
        {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjRkMThjZC1jMDNiLTQzNmEtODFhZC02Y2RhOTdjMjUyNWEiLCJpYXQiOjE3MDg5ODM2Mzl9.QtBi0AsrygH-rb2nXPNJtAKu-kdaJuSWm8xdAvafFp0',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        },
      );

      console.log('🚀 ~ response:', response);
    } catch (error) {
      console.log('🚀 ~ error:', error);
    }

    // try {
    //   const res = await axios.post(
    //     'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/products:search',
    //     {
    //       sorting_criteria: {
    //         field: 'id',
    //         direction: 'asc',
    //       },
    //       pagination_criteria: {
    //         limit: 10,
    //       },
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization:
    //           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NjRkMThjZC1jMDNiLTQzNmEtODFhZC02Y2RhOTdjMjUyNWEiLCJpYXQiOjE3MDg5ODM2Mzl9.QtBi0AsrygH-rb2nXPNJtAKu-kdaJuSWm8xdAvafFp0',
    //       },
    //     },
    //   );
    //   console.log('🚀 ~ res:', res);
    // } catch (error) {
    //   console.log('🚀 ~ error:', error);
    // }

    console.log('ra');
  },
  productSync: async (data: { action: string }, jwtToken: string) =>
    (await ApiService()).post('/products/sync', data, {
      headers: {
        Authorization: jwtToken,
      },
    }),
  areProductsSynced: async (jwtToken: string) =>
    (await ApiService()).get('/products/synced', {
      headers: {
        Authorization: jwtToken,
      },
    }),
};
