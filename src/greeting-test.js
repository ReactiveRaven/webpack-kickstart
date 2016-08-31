/* eslint-env jasmine */

describe('greeting', function () {
  var greeting

  beforeEach(() => {
    greeting = require('./greeting')
  })

  it('should exist', () => {
    expect(greeting).toBeDefined()
  })
})
