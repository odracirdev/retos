/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let word1 = prompt("Palabra 1")
let word2 = prompt("Palabra 2")

function isAnagram (word1, word2){
  if (word1 === word2) return false
  
  let sortWord1 = word1.toLowerCase().split("").sort().join("")
  let sortWord2 = word2.toLowerCase().split("").sort().join("")
  
  return sortWord1 === sortWord2
  
}

console.log(isAnagram (word1, word2))