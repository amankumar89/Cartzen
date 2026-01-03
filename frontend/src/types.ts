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

export interface CommentProps {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  user: {
    name: string | null;
    imageUrl: string | null;
  } | null;
}

export interface CommentsSectionProps {
  productId: string;
  comments: Array<CommentProps>;
  currentUserId: string | null;
}

export interface EditFormProps {
  product: ProductProps;
  isPending: boolean;
  isError: boolean;
  onSubmit: (data: FormDataProps) => void;
}

export interface FormDataProps {
  title: string;
  description: string;
  imageUrl: string;
}
