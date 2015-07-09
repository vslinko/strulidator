import createValueConstraint from '../../lib/utilities/createValueConstraint'

describe('createValueConstraint', () => {
  it('should return valid result', () => {
    assert.isTrue(createValueConstraint(isNaN)(null).valid)
  })

  it('should return validators result which is true', () => {
    assert.isTrue(createValueConstraint(isNaN)('test').valid)
  })
})
