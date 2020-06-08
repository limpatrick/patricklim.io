const status = require('statuses');

class NetlifyFunctionError extends Error {
  constructor(statusCode, message) {
    super(message || status(statusCode));

    this.name = this.constructor.name;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = NetlifyFunctionError;
