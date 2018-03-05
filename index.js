function strHasBackslashes (backSlasher) {
  return /\\/.test(backSlasher)
}

function strHasSlashes (slasher) {
  return /\//.test(slasher)
}

function switchSlash (str) {

   if ( strHasBackslashes(str) & strHasSlashes(str) == true  ) {
     return 'we need some logic for matching both by index here'
   }

   else {

     if ( strHasBackslashes(str) == true ) {
       return (str).replace(/\\/g, '/')
     }

     if ( strHasSlashes(str) == true ) {
       return (str).replace(/\//g, '\\')
     }

     if ( strHasBackslashes(str) || strHasSlashes(str) == false ) {
       return 'no slashes in your string but all good ' + str
     }

   }
}

module.exports = switchSlash
