/* eslint-disable no-undefined */

import combine from '../../lib/utilities/combineConstraints'

describe('combineConstraints', () => {
  it('should create a constraints', () => {
    const actual = combine({
      keys: (val) => {
        return {
          valid: val,
          message: 'message',
          children: null
        }
      },
      values: (val) => {
        return {
          valid: val,
          message: 'message',
          children: null
        }
      }
    })('login')

    const expected = {
      valid: true,
      message: null,
      children: {
        keys: {
          valid: 'login',
          message: 'message',
          children: null
        },
        values: {
          valid: 'login',
          message: 'message',
          children: null
        }
      }
    }

    assert.deepEqual(actual, expected)
  })
})
