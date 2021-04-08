export enum Color {
  spades = "♠",
  hearts = "♥",
  wintersweet = "♣",
  square = "♦"
}

export enum digital {
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

export type pCard = {
  color: Color
  num: digital
}

export type dDeck = pCard[]