module.exports = (...words) =>
  (words.length ? words : [ 'Bonjour', 'Monde', 'Salut!' ]).join(' ')
