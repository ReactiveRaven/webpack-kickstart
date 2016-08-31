module.exports = (...words) =>
  (words.length ? words : [ 'Hello', 'world' ]).join(' ')
