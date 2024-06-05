/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

/*function area (base, altura, poli) {
  if (poli === "cuadrado" && base === altura || poli === "rectangulo" && base != altura) return base * altura
  if (poli === "triangulo") return (base * altura) / 2
  return Number.NAN
}*/

function area(base, altura, poli) { 
  if(poli === 'cuadrado' && base !== altura) return Number.NaN 
  if(poli === 'cuadrado' || poli === 'rectangulo') return base * altura
  if(poli === 'triangulo') return (base * altura) / 2
  return Number.NaN
}

area(4,4,"cuadrado")
area(2,4,"rectangulo")
area(3,5,"triangulo")