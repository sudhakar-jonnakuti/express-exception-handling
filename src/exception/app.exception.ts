import { Application, NextFunction, Request, Response } from 'express';

import HandlerException from './handler.exception';

const AppException = (app: Application) => {
  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    new HandlerException(error, request, response);
  });
}

export default AppException;