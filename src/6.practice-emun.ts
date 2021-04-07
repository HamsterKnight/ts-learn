// 扑克牌练习

// 1. 目标：创建一副扑克牌（不包含大小王）， 打印该扑克牌
enum Color {
    spades = "♠",
    hearts = "♥",
    wintersweet = "♣",
    square = "♦"
}
enum digital {
    A = "A",
    tow = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    night = "9",
    ten = "10",
    eleven = "j",
    twelve = "q",
    king = "k"
}


type pCard = {
    color: Color
    num: digital
}

type dDeck = pCard[]

function createDeck() {
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

function printDeck(deck:dDeck) {
    var str:string = ''
    deck.forEach((_, i) => {
        str+=_.color + _.num + ((i+1) % 4 == 0 ? '\n' : ' ')
    })
    console.log(str)
}
var deck = createDeck()

printDeck(deck)