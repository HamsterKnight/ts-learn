import { dDeck, Color, digital } from "./const"


export function createDeck() {
  var deck:dDeck = []
  var colors = Object.values(Color)
  var digitals = Object.values(digital)
  for(const c of colors) {
      for(const d of digitals) {
          deck.push({
              color: c,
              num: d
          })
      }
  }

  return deck
}

export function printDeck(deck:dDeck) {
  var str:string = ''
  deck.forEach((_, i) => {
      str+=_.color + _.num + ((i+1) % 4 == 0 ? '\n' : ' ')
  })
  console.log(str)
}