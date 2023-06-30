const ErrorResponseBuilder = (output: any) => {
  return {
    statusCode: output?.statusCode,
    payload: {
      errorCode: output?.payload?.errorCode,
      errorName: output?.payload?.errorName,
      errorMessage: output?.payload?.errorMessage,
      ...(output?.payload?.errorRawMessage)
      && { errorRawMessage: output?.payload?.errorRawMessage }
    }
  };
}

export default ErrorResponseBuilder;