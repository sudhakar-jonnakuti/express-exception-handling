import { Request, Response } from 'express';

import CustomException from './custom.exception';
import ErrorResponseBuilder from '../common/builder/error-response.builder';
import { InternalServeError } from './response/server.exception';

class HandlerException {

  constructor(error: Error, request: Request, response: Response) {
    if (this._isTrustedError(error)) {
      this._handleTrustedError(error as CustomException, request, response);
    } else {
      this._handleUntrustedError(error, request, response);
    }
  }

  private _isTrustedError(error: Error): boolean {
    return error instanceof CustomException ? error.errorOperational : false;
  }

  private _handleTrustedError(error: CustomException, request: Request, response: Response): void {
    console.log(`[Trusted Exception]: Path: ${request.path}, Method: ${request.method}`);
    console.error(`[Trusted Exception]: ${error.stack}`);
    this._handleErrorResponse(error, response);
  }

  private _normalizeError(error: Error): Error {
    if (typeof error === "object" && error instanceof Error) {
      return error;
    } else if (typeof error === "string") {
      return new Error(error);
    }
    return new Error(JSON.stringify(error));
  }

  private _handleUntrustedError(error: Error, request: Request, response?: Response): void {
    console.log(`[Untrusted Exception]: Path: ${request.path}, Method: ${request.method}`);
    console.error(`[Untrusted Exception]: ${error.stack}`);
    const serialized = this._normalizeError(error).message;
    error = new InternalServeError(serialized);
    this._handleErrorResponse((error as CustomException), response);
  }

  private _handleErrorResponse(error: CustomException, response: Response) {
    response.status(error.errorCode).send(
      ErrorResponseBuilder({
        statusCode: error.errorCode,
        payload: {
          errorCode: error.errorCode,
          errorName: error.errorName,
          errorMessage: error.errorMessage,
          ...(error.errorRawMessage) && { errorRawMessage: error.errorRawMessage }
        }
      })
    );
  }

}

export default HandlerException;
