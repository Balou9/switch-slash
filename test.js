var tape = require('tape')
var switchSlash = require('./index.js')
var sl = '$=$419//§%'
var bsl = '\\'
var bslstr = 'wefiwejifljwie\\\\\///////\\\\/////'
var number = 0


tape('Switch Functions up', function (t) {
  t.ok(switchSlash(sl), 'is true')
  t.end()
})


tape('Switch Functions up with array', function (t) {
  t.ok(typeof switchSlash(bslstr), 'string', 'is string')
  t.end()
})

tape('Switch if str has both slash and backslash', function (t) {
  t.ok(switchSlash(bslstr), 'is true')
  t.end()
})
