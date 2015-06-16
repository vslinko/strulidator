/* eslint-disable no-undefined */

jest.dontMock('../createObjectConstraint')

describe('createObjectConstraint', () => {
  const creator = require('../createObjectConstraint')
  const constraint = creator({
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
    expect(constraint({
      login: 'test'
    })).toEqual({
      valid: false,
      message: undefined,
      children: {
        login: {
          valid: false,
          value: 'test',
          message: 'message'
        }
      }
    })
  })
  it('should return valid result', () => {
    expect(constraint({
      login: 'valid'
    })).toEqual({
      valid: true,
      message: undefined,
      children: {
        login: {
          valid: true,
          value: 'valid',
          message: 'message'
        }
      }
    })
  })
})
