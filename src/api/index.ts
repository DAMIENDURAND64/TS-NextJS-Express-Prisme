import { Router } from "express";
import books from "./Book/routes";
import users from "./User/routes";
import auth from "./Auth/routes";
import collection from "./Collection/routes";

const router = Router();

router.use("/books", books);
router.use("/users", users);
router.use("/collections", collection);
router.use("/auth", auth);

export default router;
