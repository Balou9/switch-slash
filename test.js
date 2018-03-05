var tape = require('tape')
var switchSlash = require('./index.js')
var sl = '$=$419//§%'
var bsl = '\\'
var bslstr = sl.concat(bsl, bsl)
var number = 0


tape('Switch Functions up', function (t) {
  t.ok(switchSlash(sl), 'is true')
  t.end()
})


tape('Switch Functions up with array', function (t) {
  t.ok(typeof switchSlash(bslstr), 'string', 'is string')
  t.end()
})
