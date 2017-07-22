let chars = 'abcdefghijklmnopqrstuvwxyz'
chars = chars.concat(chars.toUpperCase())
chars = chars.concat('1234567890')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function dog(length: number = 4) {
  let id = '';
  for(let i = 0; i < length; i++) {
    let rando = getRandomInt(0, chars.length-1)
    id += chars[rando]
  }
  return id
}
