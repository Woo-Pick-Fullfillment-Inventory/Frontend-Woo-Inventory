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
