/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(n){
  let primo = true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      primo = false
      break
    }
  }
  return primo
}

for(let i = 1; i <= 100; i++) {
  if (esPrimo(i)) console.log(i)
}