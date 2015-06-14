export default function getMessage(value, valid, message, defaultMessage) {
  if (valid) {
    return null
  }

  if (!message) {
    return defaultMessage
  }

  if (typeof message === 'function') {
    return message(value)
  }

  return message
}
