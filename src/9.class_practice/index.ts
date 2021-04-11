import { Deck } from './model'
var deck = new Deck()
console.log('=====未洗牌前=========')
deck.printDeck()
console.log("=====洗牌后=========")
deck.Shuffle()
deck.printDeck()
console.log("======发牌========")
let player = deck.publish()
console.log("======玩家一========")
player.player1.printDeck()
console.log("======玩家二========")
player.player2.printDeck()
console.log("======玩家三========")
player.player3.printDeck()
console.log("======剩余牌========")
player.left.printDeck()


