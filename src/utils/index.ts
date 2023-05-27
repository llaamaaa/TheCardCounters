enum CardValue {
    ACE = 'ace',
    TWO = 'two',
    THREE = "three",
    FOUR = "four",
    FIVE = "five",
    SIX = "six",
    SEVEN = "seven",
    EIGHT = "eight",
    NINE = "nine",
    TEN = "ten",
    JACK = "jack",
    QUEEN = "queen",
    KING = 'king'
}

enum CardSuit {
    DIAMONDS = "diamonds",
    CLUBS = 'clubs',
    HEARTS = 'hearts',
    SPADES = "spades"
}

interface Card {
    value: CardValue;
    suit: string;   
}

export type { Card };





