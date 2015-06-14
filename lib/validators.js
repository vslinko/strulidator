import isNull as _isNull from 'lodash/lang/isNull'
import isUndefined as _isUndefined from 'lodash/lang/isUndefined'

export const notNull = value =>
  !_isNull(value) && !_isUndefined(value)

export const notEmpty = value =>
  value.length > 0

export isString from 'lodash/lang/isString'

export const isEmail = value =>
  /^.+@.+$/.test(value)
