import { Router } from "express";
import books from "./Book/routes";
import users from "./User/routes";
import collection from "./Collection/routes";

const router = Router();

router.use("/books", books);
router.use("/users", users);
router.use("/collections", collection);

export default router;
