import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);

export default router;
// router is exported and used as userRouter in index.js
