'use strict'

class SpecResult {
  /**
   * @param {Spec} spec The spec
   * @param {boolean} ok True if the spec is ok
   * @param {Error} error The error
   * @param {boolean} skipped True if the spec is skipped
   */
  constructor (spec, ok, err, skipped) {
    this.spec = spec
    this.ok = ok
    this.err = err
    this.skipped = skipped
  }
}

module.exports = SpecResult
