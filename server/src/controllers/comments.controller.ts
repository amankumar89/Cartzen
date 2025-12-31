import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as queries from "../db/queries";

// create comment PROTECTED
export const createComment = async (req: Request, res: Response) => {
  try {
    // check for authenticated user
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { productId } = req.params;
    const { content } = req.body;

    // validate input
    if (!content?.trim()) {
      return res.status(400).json({ message: "Comment Content is required" });
    }

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // find product in database
    const product = await queries.getProductById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // create comment in database
    const newComment = await queries.createComment({
      content,
      userId,
      productId,
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// delete comment PROTECTED
export const deleteComment = async (req: Request, res: Response) => {
  try {
    // check for authenticated user
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { commentId } = req.params;
    if (!commentId) {
      return res.status(400).json({ message: "Comment ID is required" });
    }

    // check for comment in database
    const comment = await queries.getCommentById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // ensure the authenticated user is the owner of the comment
    if (comment.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You can only delete your own comments" });
    }

    // delete comment from database
    await queries.deleteComment(commentId);
    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
