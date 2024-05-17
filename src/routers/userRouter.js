import express from "express";
import { edit, remove, see, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);

export default userRouter;
