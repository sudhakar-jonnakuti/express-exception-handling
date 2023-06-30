export interface ICustomExceptionArgs {
  errorCode: number;
  errorName: string;
  errorMessage: string;
  errorRawMessage?: unknown;
  errorOperational?: boolean;
}
