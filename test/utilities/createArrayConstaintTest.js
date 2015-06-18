import createArrayConstraint from '../../lib/utilities/createArrayConstraint'

describe('createArrayConstraint', () => {
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

    assert.deepEqual(tmpObj, expected)
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

    assert.deepEqual(tmpObj, expected)
  })

  it('should return invalid result if value isnt an array', () => {
    const tmpObj = obj('test')

    const expected = {
      children: [],
      message: 'Value is not array',
      valid: false
    }

    assert.deepEqual(tmpObj, expected)
  })
})
