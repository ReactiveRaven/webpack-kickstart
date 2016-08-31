/* eslint-env jasmine */

describe('greeting', function () {
  var greeting

  beforeEach(() => {
    greeting = require('./greeting')
  })

  it('should exist', () => {
    expect(greeting).toBeDefined()
  })

  it('should join words together into a string', () => {
    expect(greeting(1, 2, 3)).toBe('1 2 3')
  })

  it('should offer default words', () => {
    expect(greeting()).toBe('Hello world')
  })
})
