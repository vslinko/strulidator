import {isNull} from '../validators'
import createConstraint from './createConstraint'

export default function createValueConstraint(validator, message) {
  return createConstraint(
    value => isNull(value) || validator(value),
    message
  )
}
