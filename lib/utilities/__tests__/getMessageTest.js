import getMessage from '../getMessage'

describe('getMessage', () => {
  it('should create a message', () => {
    assert.equal(getMessage('test', false, 'test message'), 'test message')
  })

  it('should create a message through function', () => {
    assert.equal(getMessage('test', false, val => val + ' through'), 'test through')
  })

  it('should return null if value is valid', () => {
    assert.equal(getMessage('test', true), null)
  })

  it('should return default message', () => {
    assert.equal(getMessage('test', false, false, 'default'), 'default')
  })
})
