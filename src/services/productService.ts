import { ApiService } from './apiService';

export const productService = {
  getProducts: async (page: number) => {
    const res = (await ApiService()).get('/products', {
      params: { per_page: 10, page },
    });
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
