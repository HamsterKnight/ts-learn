import { dDeck, Color, digital, JokeType, NormalCard, Joker } from "./const"


export function createDeck() {
  var deck:dDeck = []
  var colors = Object.values(Color)
  var digitals = Object.values(digital)
  for(const c of colors) {
      for(const d of digitals) {
        let card:NormalCard = {
          color: c,
          num: d,
          getString() {
            return this.color + this.num
          }
        }
          deck.push(card)
      }
  }
  let joker:Joker
  joker = {
    type: JokeType.big,
    getString() {
      return 'jo'
    }
  }
  deck.push(joker)
  joker = {
    type: JokeType.big,
    getString() {
      return 'JO'
    }
  }
  deck.push(joker)
  return deck
}

export function printDeck(deck:dDeck) {
  var str:string = ''
  deck.forEach((_, i) => {
      str+=_.getString()+ ((i+1) % 4 == 0 ? '\n' : ' ')
  })
  console.log(str)
}