const mokha = require('../lib')
const expect = require('chai').expect

describe('mokha', () => {
  it('has describe method', () => {
    expect(mokha.describe).to.be.an('function')
  })
})
