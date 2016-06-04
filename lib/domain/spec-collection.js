'use strict'

class SpecCollection {
  /**
   * @param {Spec[]} specs The specs
   */
  constructor (specs) {
    this.specs = specs || []
  }

  /**
   * Adds the spec.
   * @param {Spec} spec The spec
   */
  add (spec) {
    this.specs.push(spec)
  }

  /**
   * Runs the specs.
   */
  run () {
  }
}

module.exports = SpecCollection
