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

export enum CardSuit {
    DIAMONDS = "diamonds",
    CLUBS = 'clubs',
    HEARTS = 'hearts',
    SPADES = "spades"
}

interface Card {
    value: CardValue;
    suit: CardSuit;   
}

// gets random between [a, b]
export const randomRange = (endNumber: number) => {
    return Math.round(Math.random() * endNumber);
}

export type { Card };






