import { Router } from "express";
import { syncUser } from "../controllers/users.controller";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/users/sync -> post -> sync the clerk user to our database
router.post("/sync", requireAuth(), syncUser);

export default router;
