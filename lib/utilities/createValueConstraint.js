import createConstraint from './createConstraint'

export default function createValueConstraint(validator, message) {
  return createConstraint(
    value => value === null || value === undefined || validator(value),
    message
  )
}
