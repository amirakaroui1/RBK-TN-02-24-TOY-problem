/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 */ 
var commonCharacters =(string1,string2) =>{
    var res =""
    for(var i=0;i<string1.length;i++){
        if(!string1 || !string2 ){
            return ""
        }
        var char =string1[i]
        if(string2.includes(char) && !res.includes(char)){
         res = res+char
        }
    }
return res
} 
