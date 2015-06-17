jest.dontMock('../createArrayConstraint')
jest.dontMock('../../validators')
jest.dontMock('../getMessage')

describe('createArrayConstraint', () => {
  const createArrayConstraint = require('../createArrayConstraint')
  const obj = createArrayConstraint(el => el)

  it('should return invalid result if some of array items are invalid', () => {
    const tmpObj = obj([{
      valid: false
    }, {
      valid: true
    }])

    const expected = {
      valid: false,
      message: 'Some items in array are invalid',
      children: [{
        valid: false
      }, {
        valid: true
      }]
    }

    expect(tmpObj).toEqual(expected)
  })

  it('should return valid result if all arrays items are valid', () => {
    const tmpObj = obj([{
      valid: true
    }, {
      valid: true
    }])

    const expected = {
      valid: true,
      message: null,
      children: [{
        valid: true
      }, {
        valid: true
      }]
    }

    expect(tmpObj).toEqual(expected)
  })

  it('should return invalid result if value isnt an array', () => {
    const tmpObj = obj('test')

    const expected = {
     children: {},
     message: 'Value is not array',
     valid: false
    }

    expect(tmpObj).toEqual(expected)
  })
})
