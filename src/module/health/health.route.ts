import { Router } from 'express';

import IRouter from '../../common/interface/route.interface';
import HealthCheckController from './health.controller';

class HealthCheckRoute implements IRouter {
  public path = '/health';
  public router = Router();
  public controller: any;

  constructor() {
    this.controller = new HealthCheckController();
    this.initRoute();
  }

  public initRoute(): void {
    this.router.get(this.path, this.controller.getHealth);
  }

}
export default HealthCheckRoute;