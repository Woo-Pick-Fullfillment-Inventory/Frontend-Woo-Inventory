import { authenticationRoutes } from './authenticationRoutes';
import { productRoutes } from './productRoutes';

export const routes = {
  ...authenticationRoutes,
  ...productRoutes,
};
