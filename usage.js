var switchSlash = require('./index.js')
var sl = '$=$419//§%'
var bsl = '\\'
var bslstr = sl.concat(bsl, bsl)
var nosl = '419ers'
var number = 0

// fix number and sl and bsl equals true

console.log('before switch', sl, 'after switch', switchSlash(sl))
console.log('before switch', bslstr, 'after switch', switchSlash(bslstr))
console.log('before switch', nosl, 'after switch', switchSlash(nosl))
