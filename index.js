var slashdet = require('slash-detector')

function switchSlash (str) {

   if (slashdet.strHasBackslashes(str) & slashdet.strHasSlashes(str) == true){
     return 'we need some logic for matching both by index here'
   }

   else {

     if (slashdet.strHasBackslashes(str) || slashdet.strHasSlashes(str) == false){
       return (str).replace(/\\/g, '/')
     }
     if (slashdet.strHasSlashes(str) == true){
       return (str).replace(/\//g, '\\')
     }
     if (slashdet.strHasBackslashes(str) || slashdet.strHasSlashes(str) == false){
       return 'no slashes in your string but all good ' + str
     }
   }
}

module.exports = switchSlash
