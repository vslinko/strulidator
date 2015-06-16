/* eslint-disable no-undefined */

jest.dontMock('../createConstraint')

describe('createConstraint', () => {
  const creator = require('../createConstraint')
  const constraint = creator(isNaN)

  it('should return valid', () => {
    expect(constraint(NaN)).toEqual({valid: true, message: undefined, children: null})
  })
  it('should return invalid', () => {
    expect(constraint(2)).toEqual({valid: false, message: undefined, children: null})
  })
})
