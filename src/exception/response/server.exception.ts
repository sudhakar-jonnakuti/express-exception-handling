import status from 'http-status';

import CustomException from "../custom.exception"

export class InternalServeError extends CustomException {
  constructor(errorRawMessage?: unknown) {
    super({
      errorCode: Number(status['INTERNAL_SERVER_ERROR']),
      errorName: String(status[`${status.INTERNAL_SERVER_ERROR}_NAME`]),
      errorMessage: String(status[`${status.INTERNAL_SERVER_ERROR}_MESSAGE`]),
      errorRawMessage: errorRawMessage
    })
  }
}
