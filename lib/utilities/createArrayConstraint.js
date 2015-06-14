import {isArray} from '../validators'
import getMessage from './getMessage'

export default function createArrayConstraint(constraint, message) {
  return value => {
    if (!isArray(value)) {
      return {
        valid: false,
        message: getMessage(value, false, message, 'Value is not array'),
        children: []
      }
    }

    const children = value.map(constraint)
    const valid = children.every(child => child.valid)

    return {
      valid,
      message: getMessage(value, valid, message, 'Some items in array are invalid'),
      children,
    }
  }
}
