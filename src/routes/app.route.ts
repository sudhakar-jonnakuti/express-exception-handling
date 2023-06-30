import { Application, NextFunction, Request, Response } from "express";

import HealthCheckRoute from '../module/health/health.route';
import PostRoute from '../module/post/post.route';
import { NotFound } from '../exception/response/client.exception';

const appModuleRoute = (app: Application) => {
  const moduleRoute = () => [
    new HealthCheckRoute(),
    new PostRoute()
  ];

  moduleRoute().forEach((appRoute) => {
    app.use("/api", appRoute.router);
  });
}

const appDefaultRoute = (app: Application) => {
  app.use("*", (req: Request, res: Response, next: NextFunction) => { 
    throw new NotFound()
  });
}

const AppRoute = (app: Application) => {
  appModuleRoute(app);
  appDefaultRoute(app);
}

export default AppRoute;
