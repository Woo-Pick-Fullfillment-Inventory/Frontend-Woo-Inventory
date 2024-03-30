interface image {
  src: string;
  id: number;
}

export interface IProduct {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock_quantity: number;
  images: image[];
}

export interface IProductsAPIResponse {
  products: IProduct[];
  last_product: number | string | undefined;
  total_products: number;
}
