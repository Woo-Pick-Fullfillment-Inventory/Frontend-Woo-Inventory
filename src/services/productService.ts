import { ApiService } from './apiService';

export const productService = {
  productSync: async (data: { action: string }, jwtToken: string) =>
    await ApiService().post('/products/sync', data, {
      headers: {
        Authorization: jwtToken,
      },
    }),
  areProductsSynced: async (jwtToken: string) =>
    await ApiService().get('/products/synced', {
      headers: {
        Authorization: jwtToken,
      },
    }),
};
