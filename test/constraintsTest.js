/* eslint-disable no-undefined */

import * as constraints from '../lib/constraints'

describe('constraints', () => {
  function Foo() {}

  describe('notNull', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.notNull(null), {
        valid: false,
        message: 'Value is null or undefined',
        children: null
      })
      assert.deepEqual(constraints.notNull(undefined), {
        valid: false,
        message: 'Value is null or undefined',
        children: null
      })
      assert.deepEqual(constraints.notNull(0), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('isNull', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.isNull(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.isNull(undefined), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.isNull(0), {
        valid: false,
        message: 'Value is not null or undefined',
        children: null
      })
    })
  })

  describe('boolean', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.boolean(true), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.boolean(false), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.boolean(0), {
        valid: false,
        message: 'Value is not boolean',
        children: null
      })
      assert.deepEqual(constraints.boolean(null), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('isTrue', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.isTrue(true), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.isTrue(0), {
        valid: false,
        message: 'Value is not true',
        children: null
      })
      assert.deepEqual(constraints.isTrue(null), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('isFalse', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.isFalse(false), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.isFalse(0), {
        valid: false,
        message: 'Value is not false',
        children: null
      })
      assert.deepEqual(constraints.isFalse(null), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('number', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.number(false), {
        valid: false,
        message: 'Value is not number',
        children: null
      })
      assert.deepEqual(constraints.number(0), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.number(null), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('nan', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.nan(false), {
        valid: false,
        message: 'Value is not NaN',
        children: null
      })
      assert.deepEqual(constraints.nan(NaN), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.nan(null), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('infinity', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.infinity(0), {
        valid: false,
        message: 'Value is not infinity',
        children: null
      })
      assert.deepEqual(constraints.infinity(Infinity), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.infinity(null), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('string', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.string(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.string('string'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.string(10), {
        valid: false,
        message: 'Value is not string',
        children: null
      })
    })
  })

  describe('object', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.object(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.object({}), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.object(10), {
        valid: false,
        message: 'Value is not object',
        children: null
      })
      assert.deepEqual(constraints.object(new Foo()), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('plainObject', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.plainObject(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.plainObject({}), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.plainObject(10), {
        valid: false,
        message: 'Value is not plain object',
        children: null
      })
      assert.deepEqual(constraints.plainObject(new Foo()), {
        valid: false,
        message: 'Value is not plain object',
        children: null
      })
    })
  })

  describe('array', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.array(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.array([]), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.array(10), {
        valid: false,
        message: 'Value is not array',
        children: null
      })
    })
  })

  describe('regexp', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.regexp(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.regexp(/^[a-z]+$/i), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.regexp(10), {
        valid: false,
        message: 'Value is not regular expression',
        children: null
      })
    })
  })

  describe('date', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.date(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.date(new Date()), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.date(10), {
        valid: false,
        message: 'Value is not date',
        children: null
      })
    })
  })

  describe('isFunction', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.isFunction(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.isFunction(() => {}), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.isFunction(10), {
        valid: false,
        message: 'Value is not function',
        children: null
      })
    })
  })

  describe('createRegExpConstraint', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.createRegExpConstraint(/^[a-z]+$/i)(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createRegExpConstraint(/^[a-z]+$/i)('test'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createRegExpConstraint(/^[a-z]+$/i)(10), {
        valid: false,
        message: 'Value is not matched by pattern',
        children: null
      })
    })
  })

  describe('email', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.email(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.email('test@test.com'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.email('test.com'), {
        valid: false,
        message: 'Value is not valid email address',
        children: null
      })
      assert.deepEqual(constraints.email(10), {
        valid: false,
        message: 'Value is not valid email address',
        children: null
      })
    })
  })

  describe('uppercase', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.uppercase(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.uppercase('UPPERCASE'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.uppercase('lower'), {
        valid: false,
        message: 'Value has symbols not in uppercase',
        children: null
      })
    })
  })

  describe('lowercase', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.lowercase(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.lowercase('lowercase'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.lowercase('UPPER'), {
        valid: false,
        message: 'Value has symbols not in lowercase',
        children: null
      })
    })
  })

  describe('notEmpty', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.notEmpty(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.notEmpty('not'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.notEmpty(''), {
        valid: false,
        message: 'Value is empty',
        children: null
      })
    })
  })

  describe('empty', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.empty(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.empty('lowercase'), {
        valid: false,
        message: 'Value is not empty',
        children: null
      })
      assert.deepEqual(constraints.empty(''), {
        valid: true,
        message: null,
        children: null
      })
    })
  })

  describe('createMinConstraint', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.createMinConstraint(4)(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMinConstraint(4)(4), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMinConstraint(4)(3), {
        valid: false,
        message: 'Value is less than 4',
        children: null
      })
    })
  })

  describe('createMaxConstraint', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.createMaxConstraint(4)(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMaxConstraint(4)(4), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMaxConstraint(4)(5), {
        valid: false,
        message: 'Value is more than 4',
        children: null
      })
    })
  })

  describe('createMinLengthConstraint', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.createMinLengthConstraint(4)(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMinLengthConstraint(4)('12345'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMinLengthConstraint(4)('123'), {
        valid: false,
        message: 'Value length is less than 4',
        children: null
      })
    })
  })

  describe('createMaxLengthConstraint', () => {
    it('should validate', () => {
      assert.deepEqual(constraints.createMaxLengthConstraint(4)(null), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMaxLengthConstraint(4)('123'), {
        valid: true,
        message: null,
        children: null
      })
      assert.deepEqual(constraints.createMaxLengthConstraint(4)('12345'), {
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
      assert.deepEqual(constraints.createObjectKeysConstraint(template)({a: 1, b: 2}), {
       children: null,
       message: null,
       valid: true
      })
    })

    it('should return valid createObjectKeysConstraint', () => {
      assert.deepEqual(constraints.createObjectKeysConstraint(template)({a: 1}), {
       children: null,
       message: null,
       valid: true
      })
    })

    it('should return invalid createObjectKeysConstraint', () => {
      assert.deepEqual(constraints.createObjectKeysConstraint(template)({b: 2}), {
       children: null,
       message: 'Required keys missed: a',
       valid: false
      })
    })

    it('should return invalid createObjectKeysConstraint', () => {
      assert.deepEqual(constraints.createObjectKeysConstraint(template)({a: 1, b: 2, c: 3}), {
       children: null,
       message: 'Object contains extra fields: c',
       valid: false
      })
    })
  })
})
