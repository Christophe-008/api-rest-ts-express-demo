import { Router, Request, Response } from "express";
export const router = Router();

import { usersController } from "../controllers/users";

router.get("/", usersController.get);
