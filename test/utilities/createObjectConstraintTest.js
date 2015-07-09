/* eslint-disable no-undefined */

import createObjectConstraint from '../../lib/utilities/createObjectConstraint'

describe('createObjectConstraint', () => {
  const constraint = createObjectConstraint({
    login: (val) => {
      let valid = val === 'valid'

      return {
        value: val,
        valid: valid,
        message: 'message'
      }
    }
  })

  it('should return invalid result', () => {
    assert.deepEqual(
      constraint({
        login: 'test'
      }),
      {
        valid: false,
        message: 'Object is invalid',
        children: {
          login: {
            valid: false,
            value: 'test',
            message: 'message'
          }
        }
      }
    )
  })

  it('should return valid result', () => {
    assert.deepEqual(
      constraint({
        login: 'valid'
      }),
      {
        valid: true,
        message: null,
        children: {
          login: {
            valid: true,
            value: 'valid',
            message: 'message'
          }
        }
      }
    )
  })

  it('should provide access to child constraints', () => {
    assert.isFunction(constraint.login)
  })
})
