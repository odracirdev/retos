/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let str = "Ricardo"
let res = ""
for(let i = str.length - 1; i >= 0; i --) {
 res += str[i]
}

console.log(res)