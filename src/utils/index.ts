export enum CardValue {
    ACE = 'ace',
    TWO = '2',
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "jack",
    QUEEN = "queen",
    KING = 'king'
}

export function getValue(value: CardValue): string {
    return value;
}

export enum CardSuit {
    DIAMONDS = "diamonds",
    CLUBS = 'clubs',
    HEARTS = 'hearts',
    SPADES = "spades"
}

// export const AceClub:Card = () =>  {
//     return Card
//     // MAKE A CONSTRUCTOR
// }

interface Card {
    value: CardValue;
    suit: CardSuit;   
}

// gets random between [a, b]
export const randomRange = (endNumber: number) => {
    return Math.round(Math.random() * endNumber);
}

export type { Card };


export function myRandomInts(quantity: number, max: number) {
    const arr = []
    while(arr.length < quantity){
      var candidateInt = Math.floor(Math.random() * max) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
  return(arr)
  }



