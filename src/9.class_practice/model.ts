import { Color, digital, NormalCard, Joker, JokeType, dDeck } from "./const"

// 每个人手上都是一副牌
interface Player {
  player1: Deck,
  player2: Deck,
  player3: Deck,
  left: Deck
}


export class Deck {
  cards: dDeck
  constructor(cards?: dDeck) {
    if(cards) {
      this.cards = cards
    } else {
      this.init()
    }
  }
  init() {
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
      type: JokeType.little,
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
    this.cards = deck
  }
  printDeck() {
    var str:string = ''
    this.cards.forEach((_, i) => {
        str+=_.getString()+ ((i+1) % 4 == 0 ? '\n' : ' ')
    })
    console.log(str)
  }
  // 发牌
  publish():Player {
    let player1:Deck,
        player2:Deck,
        player3:Deck,
        left: Deck
      player1 = new Deck(this.takeCard(17))
      player2 = new Deck(this.takeCard(17))
      player3 = new Deck(this.takeCard(17))
      left = new Deck(this.takeCard(3))

      return {
        player1,
        player2,
        player3,
        left
      }
  }

  // 获取卡牌
  takeCard(n:number) {
    let temp:dDeck = []
    for(var i = 0; i < n; i++) {
      temp.push(this.cards.shift() as NormalCard)
    }
    return temp
  }

  // 洗牌
  Shuffle() {
    for(var i = 0; i < this.cards.length; i++ ) {
      const targetIndex = this.getRandom(0, this.cards.length)
      this.exchange(this.cards, i, targetIndex)
    }
  }
  private getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  private exchange(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}
