import { ICustomExceptionArgs } from './interface/exception.interface';

class CustomException extends Error {
  public readonly errorCode!: number;
  public readonly errorName!: string;
  public readonly errorMessage!: string;
  public readonly errorRawMessage: unknown;
  public readonly errorOperational: boolean = true;

  constructor(customExceptionArgs: ICustomExceptionArgs) {
    super(customExceptionArgs.errorMessage);

    Object.setPrototypeOf(this, new.target.prototype);

    this.errorCode = customExceptionArgs.errorCode;
    this.errorName = customExceptionArgs.errorName;
    this.errorMessage = customExceptionArgs.errorMessage;

    if (customExceptionArgs.errorRawMessage) {
      this.errorRawMessage = customExceptionArgs.errorRawMessage;
    }

    if (customExceptionArgs.errorOperational !== undefined) {
      this.errorOperational = customExceptionArgs.errorOperational;
    }

    //Error.captureStackTrace(this);
  }

}

export default CustomException;
