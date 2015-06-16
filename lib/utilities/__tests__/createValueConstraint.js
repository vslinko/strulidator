jest.dontMock('../createValueConstraint')
jest.dontMock('../createConstraint')

describe('createValueConstraint', () => {
  const creator = require('../createValueConstraint')

  it('should return valid result', () => {
    expect(creator(isNaN)(null)).toBeTruthy()
  })

  it('should return validators result which is true', () => {
    expect(creator(isNaN)('test')).toBeTruthy()
  })
})
