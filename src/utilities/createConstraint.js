import getMessage from './getMessage'

export default function createConstraint(validator, message) {
  return value => {
    const valid = validator(value)

    return {
      valid,
      message: getMessage(value, valid, message, 'Value is invalid'),
      children: null
    }
  }
}
