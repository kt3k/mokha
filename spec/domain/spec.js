'use strict'

const Spec = require('../../lib/domain/spec')
const SpecResult = require('../../lib/domain/spec-result')

const expect = require('chai').expect

let spec
let asyncSpec

describe('Spec', () => {
  beforeEach(() => {
    spec = new Spec('foo', () => {})
    asyncSpec = new Spec('bar', done => setTimeout(done, 20))
  })

  describe('isAsync', () => {
    it('returns true if it is async', () => {
      expect(asyncSpec.isAsync()).to.be.true
    })

    it('returns false if is is sync', () => {
      expect(spec.isAsync()).to.be.false
    })
  })

  describe('run', () => {
    it('sets the result of the spec', done => {
      spec.run().then(() => {
        expect(spec.result).to.be.instanceof(SpecResult)

        done()
      }).catch(done)
    })

    it('sets the result of the async spec', done => {
      asyncSpec.run().then(() => {
        expect(asyncSpec.result).to.be.instanceof(SpecResult)

        done()
      }).catch(done)
    })
  })
})
