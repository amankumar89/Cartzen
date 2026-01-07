import { Router } from "express";
import {
  createComment,
  deleteComment,
} from "../controllers/commentsController";
import { requireAuth } from "@clerk/express";

const router = Router();

// POST /api/comments/:productId - Add a comment to a product PROTECTED
router.post("/:productId", requireAuth(), createComment);

// DELETE /api/comments/:commentId - Delete a comment PROTECTED
router.delete("/:commentId", requireAuth(), deleteComment);

export default router;
