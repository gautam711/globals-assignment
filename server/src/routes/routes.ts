import express, { Router } from "express";
import allRoutes from "./index";

const routes: Router = (() => {
  const router = express.Router();

  allRoutes.forEach((route) => {
    router.use(route.route, route.routeHandler);
  });

  return router;
})();
export default routes;
