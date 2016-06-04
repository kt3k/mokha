'use strict'

const SpecCollection = require('./spec-collection')
const SuiteCollection = require('./suite-collection')

/**
 * Suite is the model of a spec suite.
 */
class Suite {
  /**
   * @param {string} name The name of the suite
   */
  constructor (name) {
    this.name = name
    this.specs = new SpecCollection()
    this.subsuites = new SuiteCollection()
  }

  /**
   * Adds the spec of this suite.
   * @param {Spec} spec The spec model
   */
  addSpec (spec) {
    this.specs.add(spec)
  }

  /**
   * Adds the child suite.
   * @param {Suite} suite The child suite
   */
  addSuite (suite) {
    this.subsuites.add(suite)
  }
}

module.exports = Suite
