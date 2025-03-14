import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import { CreateUserSchema } from "@repo/common/types";

router.post("/signup", (req: Request, res: Response) => {
  const data = CreateUserSchema.safeParse(req.body);
});

router.post("/signin", (req: Request, res: Response) => {});

router.post("/create-room", (req: Request, res: Response) => {});

export { router as userRouter };
