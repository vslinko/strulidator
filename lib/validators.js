import _isNull from 'lodash/lang/isNull'
import _isUndefined from 'lodash/lang/isUndefined'
import _isBoolean from 'lodash/lang/isBoolean'
import _isNumber from 'lodash/lang/isNumber'
import _isNaN from 'lodash/lang/isNaN'
import _isFinite from 'lodash/lang/isFinite'
import _isString from 'lodash/lang/isString'
import _isObject from 'lodash/lang/isObject'
import _isPlainObject from 'lodash/lang/isPlainObject'
import _isArray from 'lodash/lang/isArray'
import _isTypedArray from 'lodash/lang/isTypedArray'
import _isRegExp from 'lodash/lang/isRegExp'
import _isDate from 'lodash/lang/isDate'
import _isFunction from 'lodash/lang/isFunction'
import _isEmpty from 'lodash/lang/isEmpty'

// Type validators
export const isNotNull = value =>
  !_isNull(value) && !_isUndefined(value)

export const isNull = value =>
  _isNull(value) || _isUndefined(value)

export const isBoolean = value =>
  _isBoolean(value)

export const isTrue = value =>
  value === true

export const isFalse = value =>
  value === false

export const isNumber = value =>
  _isNumber(value) && !_isNaN(value) && _isFinite(value)

export const isNaN = value =>
  _isNaN(value)

export const isInfinity = value =>
  !_isFinite(value)

export const isString = value =>
  _isString(value)

export const isObject = value =>
  _isObject(value)

export const isPlainObject = value =>
  _isPlainObject(value)

export const isArray = value =>
  _isArray(value) || _isTypedArray(value)

export const isRegExp = value =>
  _isRegExp(value)

export const isDate = value =>
  _isDate(value)

export const isFunction = value =>
  _isFunction(value)

// String validators
export const isEmail = value =>
  /^.+@.+$/.test(value)

export const isUppercase = value =>
  value.toUpperCase() === value

export const isLowercase = value =>
  value.toLowerCase() === value

// Length validators
export const isNotEmpty = value =>
  !_isEmpty(value)

export const isEmpty = value =>
  _isEmpty(value)
