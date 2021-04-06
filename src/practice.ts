// 扑克牌练习

// 1. 目标：创建一副扑克牌（不包含大小王）， 打印该扑克牌

type Card = {
    color: "♠" | "♥" | "♣" | "♦"
    num: string | number
}

type Deck = Card[]

function createDeck() {
    var deck:Deck = []
    var temp:string|number
    for(var i = 1; i <= 13; i++) {
        if(i == 11) {
            temp = 'j'
        } else if (i == 12) {
            temp = 'q'
        } else if (i == 13) {
            temp = 'k'
        } else {
            temp = i
        }
        deck.push({
            color: "♠",
            num: temp
        })
        deck.push({
            color: "♥",
            num: temp
        })
        deck.push({
            color: "♣",
            num: temp
        })
        deck.push({
            color: "♦",
            num: temp
        })
    }

    return deck
}

function printDeck(deck:Deck) {
    var str:string = ''
    deck.forEach((_, i) => {
        str+=_.color + _.num + ((i+1) % 4 == 0 ? '\n' : ' ')
    })
    console.log(str)
}
var deck = createDeck()

printDeck(deck)