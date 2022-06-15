
export interface Image {
  url: string;
  name: string;
  is_principal: boolean;
}

export interface Option {
  size: string;
  quantity: number;
}

export interface Product {
  name: string;
  description: string;
  cost: number;
  price: number;
  images: Image[];
  options: Option[];
}

