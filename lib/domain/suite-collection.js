'use strict'

class SuiteCollection {
  /**
   * @param {Suite[]} suites The spec suites
   */
  constructor (suites) {
    this.suites = suites || []
  }

  /**
   * Adds the suite.
   * @param {Suite} suite The spec suite
   */
  add (suite) {
    this.suites.push(suite)
  }

  /**
   * Runs the suites.
   */
  run () {
    // TODO: impl
  }
}

module.exports = SuiteCollection
