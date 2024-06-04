/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
const firstNonRepeatedCharacter = function (string) {
  var char=0
    for(var i=0; i<string.length;i++){
        for (var j=0;j<string.length; j++){
            if(string[i].toUpperCase()===string[j].toUpperCase()){
               char=char+1
            }
        }
        if(char===1){
            return string[i]
        }
        else {
            char=0
        }
            }
            return "char repeated"
            // TODO: your solution here
}
