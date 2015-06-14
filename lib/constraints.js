import difference from 'lodash/array/difference'
import intersection from 'lodash/array/intersection'
import getMessage from './utilities/getMessage'
import createConstraint from './utilities/createConstraint'
import createValueConstraint from './utilities/createValueConstraint'
import * as validators from './validators'

// Type constraints
export const notNull = createConstraint(
  validators.isNotNull,
  'Value is null or undefined'
)

export const isNull = createConstraint(
  validators.isNull,
  'Value is not null or undefined'
)

export const boolean = createValueConstraint(
  validators.isBoolean,
  'Value is not boolean'
)

export const isTrue = createValueConstraint(
  validators.isTrue,
  'Value is not true'
)

export const isFalse = createValueConstraint(
  validators.isFalse,
  'Value is not false'
)

export const number = createValueConstraint(
  validators.isNumber,
  'Value is not number'
)

export const nan = createValueConstraint(
  validators.isNaN,
  'Value is not NaN'
)

export const infinity = createValueConstraint(
  validators.isInfinity,
  'Value is not infinity'
)

export const string = createValueConstraint(
  validators.isString,
  'Value is not string',
)

export const object = createValueConstraint(
  validators.isObject,
  'Value is not object',
)

export const plainObject = createValueConstraint(
  validators.isPlainObject,
  'Value is not plain object',
)

export const array = createValueConstraint(
  validators.isArray,
  'Value is not array',
)

export const regexp = createValueConstraint(
  validators.isRegExp,
  'Value is not regular expression',
)

export const date = createValueConstraint(
  validators.isDate,
  'Value is not date',
)

export const isFunction = createValueConstraint(
  validators.isFunction,
  'Value is not function',
)

// String constraints
export function createRegExpConstraint(regexp, message) {
  return createValueConstraint(
    value => regexp.test(value),
    message || `Value is not matched by pattern`
  )
}

export const email = createValueConstraint(
  validators.isEmail,
  'Value is not valid email address',
)

export const uppercase = createValueConstraint(
  validators.isUppercase,
  'Value has symbols not in uppercase',
)

export const lowercase = createValueConstraint(
  validators.isLowercase,
  'Value has symbols not in lowercase',
)

// Length constraints
export const notEmpty = createValueConstraint(
  validators.isNotEmpty,
  'Value is empty'
)

export const empty = createValueConstraint(
  validators.isEmpty,
  'Value is not empty'
)

export function createMinLengthConstraint(minLength, message) {
  return createValueConstraint(
    value => value.length >= minLength,
    message || `Value length is less than ${minLength}`
  )
}

export function createMaxLengthConstraint(maxLength, message) {
  return createValueConstraint(
    value => value.length <= maxLength,
    message || `Value length is more than ${maxLength}`
  )
}

// Structure constraints
export function createObjectKeysConstraint(schema, message) {
  const keys = Object.keys(schema)
  const requiredKeys = keys.filter(key => schema[key])

  return value => {
    const valueKeys = Object.keys(value)
    const keysDifference = difference(valueKeys, keys)
    const requiredKeysIntersection = intersection(requiredKeys, valueKeys)
    const requiredKeysDifference = difference(requiredKeys, requiredKeysIntersection)

    const extraValid = keysDifference.length === 0
    const requiredValid = requiredKeysIntersection.length === requiredKeys.length
    const valid = extraValid && requiredValid

    const defaultMessage = extraValid
      ? `Required keys missed: ${requiredKeysDifference.join(', ')}`
      : `Object contains extra fields: ${keysDifference.join(', ')}`

    return {
      valid,
      message: getMessage(value, valid, message, defaultMessage),
      children: null,
    }
  }
}
