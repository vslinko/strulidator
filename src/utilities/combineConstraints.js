import getMessage from './getMessage'

export default function combineConstraints(schema, message) {
  const keys = Object.keys(schema)

  return value => {
    const children = keys.reduce((acc, key) => {
      acc[key] = schema[key](value)
      return acc
    }, {})

    const valid = keys.every(key => children[key].valid)

    return {
      valid,
      message: getMessage(value, valid, message, 'Value is invalid'),
      children,
    }
  }
}
