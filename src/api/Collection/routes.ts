import { Router } from "express";
import controllers from "./controller";

const router = Router();

router.get("/", controllers.getAll);
router.get("/", controllers.getOne);

router.post("/", controllers.create);
router.post("/:id", controllers.update);
router.delete("/:id", controllers.delete);

export default router;
