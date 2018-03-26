function switchSlash (str) {
  return str.split('').map(function (char) {
    if (char === '/')
    return (char).replace('/', '\\')
    else if (char === '\\')
    return (char).replace('\\', '/')
    else return char
  }).join('')
}

module.exports = switchSlash
