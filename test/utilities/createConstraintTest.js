/* eslint-disable no-undefined */

import creator from '../../lib/utilities/createConstraint'

describe('createConstraint', () => {
  const constraint = creator(isNaN)

  it('should return valid', () => {
    assert.deepEqual(
      constraint(NaN),
      {valid: true, message: null, children: null}
    )
  })

  it('should return invalid', () => {
    assert.deepEqual(
      constraint(2),
      {valid: false, message: 'Value is invalid', children: null}
    )
  })
})
