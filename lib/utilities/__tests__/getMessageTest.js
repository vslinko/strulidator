jest.dontMock('../getMessage')

describe('getMessage', () => {
  const getMessage = require('../getMessage')

  it('should create a message', () => {
    expect(getMessage('test', false, 'test message')).toBe('test message')
  })
  it('should create a message through function', () => {
    expect(getMessage('test', false, val => val + ' through')).toBe('test through')
  })
  it('should return null if value is valid', () => {
    expect(getMessage('test', true)).toBe(null)
  })
  it('should return default message', () => {
    expect(getMessage('test', false, false, 'default')).toBe('default')
  })
})
