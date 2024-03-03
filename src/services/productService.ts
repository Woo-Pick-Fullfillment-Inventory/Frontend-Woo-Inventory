import { ApiService } from './apiService';

export const productService = {
  getProducts: async (page: number) => {
    const res = (await ApiService()).get('/products', {
      params: { per_page: 10, page },
    });
    return res;
  },
};
