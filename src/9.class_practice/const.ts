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

export enum JokeType {
  big = 'big',
  little = 'small'
}

export interface Card {
  getString(): string
}


export interface NormalCard extends Card {
  color: Color
  num: digital
}

export interface Joker extends Card {
  type: JokeType
}

export type dDeck = (NormalCard | Joker)[]