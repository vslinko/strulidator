export const notNull = value =>
  value !== null && value !== undefined

export const notEmpty = value =>
  value.length > 0

export const isString = value =>
  typeof value === 'string'

export const isEmail = value =>
  /^.+@.+$/.test(value)
