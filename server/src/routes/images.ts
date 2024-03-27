import { imagesController } from "../controllers/images/images";
import express, { Router } from "express";

const router = express.Router();

const imagesRouter: Router = (() => {
  router.get("/", imagesController);

  return router;
})();
export default imagesRouter;
