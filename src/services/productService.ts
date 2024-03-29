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
    const res = (await ApiService()).post('/products:search', data);
    return res;
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
