import { Request, Response, NextFunction } from 'express';
import { ZodError, AnyZodObject } from 'zod';

import { BadRequest } from '../../exception/response/client.exception';

const requestValidator = (schema: AnyZodObject) => 
  async (request: Request, response: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: request.body,
      query: request.query,
      params: request.params,
    });
    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      throw new BadRequest(error.issues);
    }
    throw error;
  }
};

export default requestValidator;
