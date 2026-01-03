import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as queries from "../db/queries";

export const syncUser = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // email,name, imageUrl
    const { email, name, imageUrl } = req.body;

    if (!email?.trim() || !name?.trim() || !imageUrl?.trim()) {
      return res
        .status(400)
        .json({ message: "Name, email, and image URL are required" });
    }

    const user = await queries.upsertUser({
      id: userId,
      email,
      name,
      imageUrl,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error syncing user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
