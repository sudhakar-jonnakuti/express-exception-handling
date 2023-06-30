import { Request, Response } from 'express';

class HealthCheckController {
  public getHealth = (req: Request, res: Response): void => {
    res.status(200).json({ status: 'healthy' });
  };
}

export default HealthCheckController;
