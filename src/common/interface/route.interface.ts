import { Router } from 'express';

interface IRouter {
  readonly path: string;
  readonly router: Router;
  initRoute(): void;
}

export default IRouter;