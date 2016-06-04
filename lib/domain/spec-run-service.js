'use strict'

const SpecResult = require('./spec-result')

class SpecRunService {
  /**
   * @return {Promise<SpecResult>}
   */
  run (spec) {
    return this.runSpec(spec).then(err => this.setResult(err, spec))
  }

  runSpec(spec) {
    if (!spec.isAsync()) {
      return new Promise(resolve => resolve(spec.spec()))
    } else {
      return new Promise((resolve, reject) => spec.spec(err => {
        if (err) { reject(err) }
        else { resolve() }
      }))
    }
  }

  setResult(err, spec) {
    const result = new SpecResult(spec, err == null, err, spec.skip)

    spec.setResult(result)
  }
}

module.exports = SpecRunService
