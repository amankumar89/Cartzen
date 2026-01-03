import { eq } from "drizzle-orm";
import {
  comments,
  products,
  users,
  type NewUser,
  type NewProduct,
  type NewComment,
} from "./schema";
import { db } from "./index";

// USER QUERIES

// create a single user
export const createUser = async (data: NewUser) => {
  const [user] = await db.insert(users).values(data).returning();
  return user;
};

// get a user by id
export const getUserById = async (id: string) => {
  return await db.query.users.findFirst({ where: eq(users.id, id) });
};

// update a user by id
export const updateUser = async (id: string, data: Partial<NewUser>) => {
  // check if user exists
  const existingUser = await getUserById(id);
  if (!existingUser) {
    throw new Error(`User not found with id: ${id}`);
  }
  const [user] = await db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();
  return user;
};

// either creates a new user or updates an existing one
export const upsertUser = async (data: NewUser) => {
  // const existingUser = await getUserById(data.id);
  // if (existingUser) {
  //   return await updateUser(data.id, data);
  // }
  // return await createUser(data);

  // more efficient way using upsert
  const [user] = await db
    .insert(users)
    .values(data)
    .onConflictDoUpdate({
      target: users.id,
      set: {
        email: data.email,
        name: data.name,
        imageUrl: data.imageUrl,
      },
    })
    .returning();
  return user;
};

// PRODUCT QUERIES

// create a single product
export const createProduct = async (data: NewProduct) => {
  const [product] = await db.insert(products).values(data).returning();
  return product;
};

// get all products with their associated user
export const getAllProducts = async () => {
  return await db.query.products.findMany({
    with: { user: true },
    orderBy: (products, { desc }) => [desc(products.createdAt)],
  });
};

// get a single product by id with its associated user and comments
export const getProductById = async (id: string) => {
  return await db.query.products.findFirst({
    where: eq(products.id, id),
    with: {
      user: true,
      comments: {
        with: { user: true },
        orderBy: (comments, { desc }) => [desc(comments.createdAt)],
      },
    },
  });
};

// get products by user id
export const getProductsByUserId = async (userId: string) => {
  return await db.query.products.findMany({
    where: eq(products.userId, userId),
    with: { user: true },
    orderBy: (products, { desc }) => [desc(products.createdAt)],
  });
};

// update a product by id
export const updateProduct = async (id: string, data: Partial<NewProduct>) => {
  // check if product exists
  const existingProduct = await getProductById(id);
  if (!existingProduct) {
    throw new Error(`Product not found with id: ${id}`);
  }
  const [product] = await db
    .update(products)
    .set(data)
    .where(eq(products.id, id))
    .returning();
  return product;
};

// delete a product by id
export const deleteProduct = async (id: string) => {
  // check if product exists
  const existingProduct = await getProductById(id);
  if (!existingProduct) {
    throw new Error(`Product not found with id: ${id}`);
  }
  const [product] = await db
    .delete(products)
    .where(eq(products.id, id))
    .returning();
  return product;
};

// COMMENT QUERIES

// create a single comment
export const createComment = async (data: NewComment) => {
  const [comment] = await db.insert(comments).values(data).returning();
  return comment;
};

// delete a comment by id
export const deleteComment = async (id: string) => {
  // check if comment exists
  const existingComment = await getCommentById(id);
  if (!existingComment) {
    throw new Error(`Comment not found with id: ${id}`);
  }
  const [comment] = await db
    .delete(comments)
    .where(eq(comments.id, id))
    .returning();
  return comment;
};

// get comments by id
export const getCommentById = async (id: string) => {
  return await db.query.comments.findFirst({
    where: eq(comments.id, id),
    with: {
      user: true,
    },
  });
};
