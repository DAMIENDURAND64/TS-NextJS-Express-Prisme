import { Router } from "express";
import controllers from "./controller";

const router = Router();

router.get("/", controllers.getAll);
router.get("/:id", controllers.getOne);

router.put("/:id", controllers.update);
router.delete("/:id", controllers.delete);

export default router;
