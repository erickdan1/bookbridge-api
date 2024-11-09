const MissingParamsError = require('./missing-param-error')
const InvalidParamError = require('./invalid-param-error')
const UnauthorizedError = require('./unauthorized-error')
const ServerError = require('./server-error')

module.exports = {
  MissingParamsError,
  InvalidParamError,
  UnauthorizedError,
  ServerError
}
