import { Router } from "express";
import * as productsController from "../controllers/products.controller";
import { requireAuth } from "@clerk/express";

const router = Router();

// GET /api/products - Retrieve a list of products PUBLIC
router.get("/", productsController.getAllProducts);

// GET /api/products/my - Retrieve products for the authenticated user PRIVATE
router.get("/my", requireAuth(), productsController.getMyProducts);

// GET /api/products/:id - Retrieve a single product by ID PUBLIC
router.get("/:id", productsController.getProductById);

// POST /api/products - Create a new product PRIVATE
router.post("/", requireAuth(), productsController.createProduct);

// PUT /api/products/:id - Update a product by ID PRIVATE
router.put("/:id", requireAuth(), productsController.updateProduct);

// DELETE /api/products/:id - Delete a product by ID PRIVATE
router.delete("/:id", requireAuth(), productsController.deleteProduct);

export default router;
