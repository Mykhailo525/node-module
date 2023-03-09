import { Router } from "express";

import { userController } from "../controllers/user.controller";

const router = Router();

export const userRouter = router;

router.get("/", userController.getAll);

router.get("/:userId", userController.getById);

router.post("/", userController.create);

router.put("/:userId", userController.update);

router.delete("/:userId", userController.delete);
