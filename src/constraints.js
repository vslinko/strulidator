import difference from 'ramda/src/difference'
import intersection from 'ramda/src/intersection'
import getMessage from './utilities/getMessage'
import createConstraint from './utilities/createConstraint'
import createValueConstraint from './utilities/createValueConstraint'
import * as validators from './validators'

export const notNull = createConstraint(
  validators.notNull,
  'Value is null or undefined'
)

export const notEmpty = createValueConstraint(
  validators.notEmpty,
  'Value is empty'
)

export const string = createValueConstraint(
  validators.isString,
  'Value is not string',
)

export const email = createValueConstraint(
  validators.isEmail,
  'Value is not valid email address',
)

export function createMinLengthConstraint(minLength, message) {
  return createValueConstraint(
    value => value.length >= minLength,
    message || `Value length is less than ${minLength}`
  )
}

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
