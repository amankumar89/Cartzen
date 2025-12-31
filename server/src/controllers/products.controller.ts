import type { Request, Response } from "express";
import * as queries from "../db/queries";
import { getAuth } from "@clerk/express";

// get all products (public)
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    // fetch products from the database
    const products = await queries.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get product by user id (private)
export const getMyProducts = async (req: Request, res: Response) => {
  try {
    // check if user is authenticated
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // fetch products from the database
    const products = await queries.getProductsByUserId(userId);
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving user's products:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get a single product by id (public)
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // fetch product from the database
    const product = await queries.getProductById(id!);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// create a new product (private)
export const createProduct = async (req: Request, res: Response) => {
  try {
    // check if user is authenticated
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // validate request body
    const { title, description, imageUrl } = req.body;

    if (!title?.trim() || !description?.trim() || !imageUrl?.trim()) {
      return res
        .status(400)
        .json({ message: "Title, description, and imageURL are required" });
    }

    // create product in the database
    const newProduct = await queries.createProduct({
      title,
      description,
      imageUrl,
      userId,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// update a product by id (private)
export const updateProduct = async (req: Request, res: Response) => {
  try {
    // check if user is authenticated
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params;
    // validate request body
    const { title, description, imageUrl } = req.body;

    if (!title?.trim() || !description?.trim() || !imageUrl?.trim()) {
      return res
        .status(400)
        .json({ message: "Title, description, and imageURL are required" });
    }

    // fetch existing product
    const existingProduct = await queries.getProductById(id!);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // check if the authenticated user is the owner of the product
    if (existingProduct.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You can only update your own products" });
    }

    // update product in the database
    const updatedProduct = await queries.updateProduct(id!, {
      title,
      description,
      imageUrl,
    });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// delete a product by id (private)
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    // check if user is authenticated
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params;

    // fetch existing product
    const existingProduct = await queries.getProductById(id!);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // check if the authenticated user is the owner of the product
    if (existingProduct.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You can only delete your own products" });
    }

    // delete product from the database
    await queries.deleteProduct(id!);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
