const { describe, it } = require('mocha')
const { expect } = require('chai')

describe('Maths tests', () => {
  it('should equal 2', () => {
    expect(1 + 1).to.equal(2)
  })

  it('should not equal 2', () => {
    expect(1 + 1).to.equal(4)
  })
})
