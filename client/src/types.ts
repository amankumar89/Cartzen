export interface UserDataProps {
  id?: string;
  name: string;
  email: string;
  imageUrl: string;
}

export interface ProductDataProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProductProps {
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  title: string;
  user?: {
    name: string;
    imageUrl: string;
  };
  comments?: Array<{
    id: string;
  }>;
}
export interface ProductCardProps {
  product: ProductProps;
}
