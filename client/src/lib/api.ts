import type { ProductDataProps, UserDataProps } from "../types";
import api from "./axios";

// USER APIs
export const syncUser = async (userData: UserDataProps) => {
  const { data } = await api.post("/users/sync", userData);
  return data;
};

// PRODUCT APIs

// GET all products
export const getAllProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

// GET product by id
export const getProductById = async (productId: string) => {
  const { data } = await api.get(`/products/${productId}`);
  return data;
};

// GET my products
export const getMyProducts = async () => {
  const { data } = await api.get("/products/my");
  return data;
};

// CREATE a new product
export const createProduct = async (productData: ProductDataProps) => {
  const { data } = await api.post("/products", productData);
  return data;
};

// UPDATE a product
export const updateProduct = async ({
  id,
  ...productData
}: ProductDataProps) => {
  const { data } = await api.put(`/products/${id}`, productData);
  return data;
};

// DELETE a product
export const deleteProduct = async (id: string) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

// Comments API
// CREATE a new comment
export const createComment = async ({
  productId,
  content,
}: {
  productId: string;
  content: string;
}) => {
  const { data } = await api.post(`/comments/${productId}`, { content });
  return data;
};

// DELETE a comment
export const deleteComment = async (commentId: string) => {
  const { data } = await api.delete(`/comments/${commentId}`);
  return data;
};
