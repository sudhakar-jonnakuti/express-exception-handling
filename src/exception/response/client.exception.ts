import status from 'http-status';

import CustomException from '../custom.exception';

export class NotFound extends CustomException {
  constructor() {
    super({
      errorCode: Number(status['NOT_FOUND']),
      errorName: String(status[`${status.NOT_FOUND}_NAME`]),
      errorMessage: String(status[`${status.NOT_FOUND}_MESSAGE`])
    })
  };
}

export class BadRequest extends CustomException {
  constructor(errorRawMessage?: unknown) {
    super({
      errorCode: Number(status['BAD_REQUEST']),
      errorName: String(status[`${status.BAD_REQUEST}_NAME`]),
      errorMessage: String(status[`${status.BAD_REQUEST}_MESSAGE`]),
      errorRawMessage: errorRawMessage
    })
  };
}

