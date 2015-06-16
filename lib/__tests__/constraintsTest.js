/* eslint-disable no-undefined */

jest.dontMock('../constraints')
jest.dontMock('../utilities/createValueConstraint')
jest.dontMock('../utilities/createConstraint')
jest.dontMock('../utilities/getMessage')
jest.dontMock('../validators')

describe('constraints', () => {
  const contraints = require('../constraints')

  describe('notNull', () => {
    it('should validate', () => {
      expect(contraints.notNull(null)).toEqual({
        valid: false,
        message: 'Value is null or undefined',
        children: null
      })
      expect(contraints.notNull(undefined)).toEqual({
        valid: false,
        message: 'Value is null or undefined',
        children: null
      })
      expect(contraints.notNull(0)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('isNull', () => {
    it('should validate', () => {
      expect(contraints.isNull(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.isNull(undefined)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.isNull(0)).toEqual({
        valid: false,
        message: 'Value is not null or undefined',
        children: null
      })
    })
  })
  describe('boolean', () => {
    it('should validate', () => {
      expect(contraints.boolean(true)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.boolean(false)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.boolean(0)).toEqual({
        valid: false,
        message: 'Value is not boolean',
        children: null
      })
      expect(contraints.boolean(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('isTrue', () => {
    it('should validate', () => {
      expect(contraints.isTrue(true)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.isTrue(0)).toEqual({
        valid: false,
        message: 'Value is not true',
        children: null
      })
      expect(contraints.isTrue(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('isFalse', () => {
    it('should validate', () => {
      expect(contraints.isFalse(false)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.isFalse(0)).toEqual({
        valid: false,
        message: 'Value is not false',
        children: null
      })
      expect(contraints.isFalse(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('number', () => {
    it('should validate', () => {
      expect(contraints.number(false)).toEqual({
        valid: false,
        message: 'Value is not number',
        children: null
      })
      expect(contraints.number(0)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.number(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('nan', () => {
    it('should validate', () => {
      expect(contraints.nan(false)).toEqual({
        valid: false,
        message: 'Value is not NaN',
        children: null
      })
      expect(contraints.nan(NaN)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.nan(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('infinity', () => {
    it('should validate', () => {
      expect(contraints.infinity(0)).toEqual({
        valid: false,
        message: 'Value is not infinity',
        children: null
      })
      expect(contraints.infinity(Infinity)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.infinity(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('string', () => {
    it('should validate', () => {
      expect(contraints.string(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.string('string')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.string(10)).toEqual({
        valid: false,
        message: 'Value is not string',
        children: null
      })
    })
  })

  function Foo() {}

  describe('object', () => {
    it('should validate', () => {
      expect(contraints.object(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.object({})).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.object(10)).toEqual({
        valid: false,
        message: 'Value is not object',
        children: null
      })
      expect(contraints.object(new Foo())).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('plainObject', () => {
    it('should validate', () => {
      expect(contraints.plainObject(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.plainObject({})).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.plainObject(10)).toEqual({
        valid: false,
        message: 'Value is not plain object',
        children: null
      })
      expect(contraints.plainObject(new Foo())).toEqual({
        valid: false,
        message: 'Value is not plain object',
        children: null
      })
    })
  })
  describe('array', () => {
    it('should validate', () => {
      expect(contraints.array(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.array([])).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.array(10)).toEqual({
        valid: false,
        message: 'Value is not array',
        children: null
      })
    })
  })
  describe('regexp', () => {
    it('should validate', () => {
      expect(contraints.regexp(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.regexp(/^[a-z]+$/i)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.regexp(10)).toEqual({
        valid: false,
        message: 'Value is not regular expression',
        children: null
      })
    })
  })
  describe('date', () => {
    it('should validate', () => {
      expect(contraints.date(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.date(new Date())).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.date(10)).toEqual({
        valid: false,
        message: 'Value is not date',
        children: null
      })
    })
  })
  describe('isFunction', () => {
    it('should validate', () => {
      expect(contraints.isFunction(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.isFunction(() => {})).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.isFunction(10)).toEqual({
        valid: false,
        message: 'Value is not function',
        children: null
      })
    })
  })
  describe('createRegExpConstraint', () => {
    it('should validate', () => {
      expect(contraints.createRegExpConstraint(/^[a-z]+$/i)(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.createRegExpConstraint(/^[a-z]+$/i)('test')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.createRegExpConstraint(/^[a-z]+$/i)(10)).toEqual({
        valid: false,
        message: 'Value is not matched by pattern',
        children: null
      })
    })
  })
  describe('email', () => {
    it('should validate', () => {
      expect(contraints.email(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.email('test@test.com')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.email('test.com')).toEqual({
        valid: false,
        message: 'Value is not valid email address',
        children: null
      })
      expect(contraints.email(10)).toEqual({
        valid: false,
        message: 'Value is not valid email address',
        children: null
      })
    })
  })
  describe('uppercase', () => {
    it('should validate', () => {
      expect(contraints.uppercase(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.uppercase('UPPERCASE')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.uppercase('lower')).toEqual({
        valid: false,
        message: 'Value has symbols not in uppercase',
        children: null
      })
    })
  })
  describe('lowercase', () => {
    it('should validate', () => {
      expect(contraints.lowercase(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.lowercase('lowercase')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.lowercase('UPPER')).toEqual({
        valid: false,
        message: 'Value has symbols not in lowercase',
        children: null
      })
    })
  })
  describe('notEmpty', () => {
    it('should validate', () => {
      expect(contraints.notEmpty(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.notEmpty('not')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.notEmpty('')).toEqual({
        valid: false,
        message: 'Value is empty',
        children: null
      })
    })
  })
  describe('empty', () => {
    it('should validate', () => {
      expect(contraints.empty(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.empty('lowercase')).toEqual({
        valid: false,
        message: 'Value is not empty',
        children: null
      })
      expect(contraints.empty('')).toEqual({
        valid: true,
        message: null,
        children: null
      })
    })
  })
  describe('createMinLengthConstraint', () => {
    it('should validate', () => {
      expect(contraints.createMinLengthConstraint(4)(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.createMinLengthConstraint(4)('12345')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.createMinLengthConstraint(4)('123')).toEqual({
        valid: false,
        message: 'Value length is less than 4',
        children: null
      })
    })
  })
  describe('createMaxLengthConstraint', () => {
    it('should validate', () => {
      expect(contraints.createMaxLengthConstraint(4)(null)).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.createMaxLengthConstraint(4)('123')).toEqual({
        valid: true,
        message: null,
        children: null
      })
      expect(contraints.createMaxLengthConstraint(4)('12345')).toEqual({
        valid: false,
        message: 'Value length is more than 4',
        children: null
      })
    })
  })
  describe('createObjectKeysConstraint', () => {
    const template = {
      a: true,
      b: false
    }

    it('should return valid createObjectKeysConstraint', () => {
      expect(contraints.createObjectKeysConstraint(template)({a: 1, b: 2})).toEqual({
       children: null,
       message: null,
       valid: true
      })
    })
    it('should return valid createObjectKeysConstraint', () => {
      expect(contraints.createObjectKeysConstraint(template)({a: 1})).toEqual({
       children: null,
       message: null,
       valid: true
      })
    })
    it('should return invalid createObjectKeysConstraint', () => {
      expect(contraints.createObjectKeysConstraint(template)({b: 2})).toEqual({
       children: null,
       message: 'Required keys missed: a',
       valid: false
      })
    })
    it('should return invalid createObjectKeysConstraint', () => {
      expect(contraints.createObjectKeysConstraint(template)({a: 1, b: 2, c: 3})).toEqual({
       children: null,
       message: 'Object contains extra fields: c',
       valid: false
      })
    })
  })
})
