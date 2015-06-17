/* eslint-disable no-undefined */

jest.dontMock('../combineConstraints')

describe('combineConstraints', () => {
  const combine = require('../combineConstraints')

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
      message: undefined,
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

    expect(actual).toEqual(expected)
  })
})
