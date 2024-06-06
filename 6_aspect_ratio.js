/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
function MCD (a,b) {
  let res = a % b
  if (res === 0) return b
  return MCD (b, res)
}

const myImage = new Image()
myImage.onload = () => {
  let {width, height} = myImage
  console.log("ancho: %s alto: %s", width, height)
  let mcd = MCD(width, height)
  let aspectRatio = `${width / mcd}:${height / mcd}`
  console.log("El aspect ratio de esta es -> " + aspectRatio)
}
myImage.src = "https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?blend=https://manz.dev/manz-logo.png&blend-w=2000"