/**
 * Spec is the model for a single spec (test case).
 */
class Spec {
  /**
   * @param {string} behaviour The behaviour in text
   * @param {Function} spec The function which expresses the spec
   * @param {number} timeout The timeout of the spec
   */
  constructor (behavior, spec, timeout) {
    this.behavior = behavior
    this.spec = spec
  }

  isAsync () {
    return this.spec.length > 0
  }

  /**
   * Runs the spec.
   * @return {Promise}
   */
  run () {
    if (!this.isAsync()) {
      return this.spec()
    }

    return new Promise((resolve, reject) => this.spec(err => err ? reject(err) : resolve()))
  }
}

module.exports = Spec
