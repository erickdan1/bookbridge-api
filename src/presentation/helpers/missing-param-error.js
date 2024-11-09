module.exports = class MissingParamsError extends Error {
  constructor (paramName) {
    super(`Missing params ${paramName}`)
    this.name = 'MissingParamsError'
  }
}
