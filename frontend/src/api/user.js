/**
 * Mocking client-server processing
 * Demonstration
 */
const _message = 'Welcome to Client Main Page'

export default {
  getMessage (callback) {
    setTimeout(() => callback(_message), 1000)
  }
}
