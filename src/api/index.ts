import { Router } from "express";
import books from "./Book/routes";
import users from "./User/routes";
import auth from "./Auth/routes";
import collection from "./Collection/routes";
import customer from "./Customer/routes";

const router = Router();

router.use("/books", books);
router.use("/users", users);
router.use("/collections", collection);
router.use("/auth", auth);
router.use("/customers", customer);

export default router;
