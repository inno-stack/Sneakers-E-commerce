export interface Product {
  id: string;
  company: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: ProductImage[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  thumbnail: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;
  itemCount: number;
}
