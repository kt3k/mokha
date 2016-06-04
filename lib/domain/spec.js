'use strict'

const SpecRunService = require('./spec-run-service')

const runService = new SpecRunService()

/**
 * Spec is the model for a single spec (test case).
 */
class Spec {
  /**
   * @param {string} behaviour The behaviour in text
   * @param {Function} spec The function which expresses the spec
   * @param {boolean} skip True if this spec is skipped
   * @param {number} timeout The timeout of the spec
   */
  constructor (behavior, spec, skip, timeout) {
    this.behavior = behavior
    this.spec = spec
    this.skip = skip
    this.timeout = timeout
  }

  isAsync () {
    return this.spec.length > 0
  }

  /**
   * Runs the spec.
   * @return {Promise}
   */
  run () {
    return runService.run(this)
  }

  /**
   * @param {SpecResult} result The spec result
   */
  setResult(result) {
    this.result = result
  }
}

module.exports = Spec
