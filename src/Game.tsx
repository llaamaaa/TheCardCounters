import { Card, CardSuit, CardValue, randomRange } from "./utils";


const Game: React.FC = () => {

    const deck: Array<Card> = [];
    Object.values(CardValue).map(cardValue => {
        Object.values(CardSuit).map(cardSuit => {
            deck.push({value: cardValue as CardValue, suit: cardSuit as CardSuit});
        })
    })

    const firstIndex = randomRange(51);
    const firstCard = deck[firstIndex];
    deck.splice(firstIndex, 1);

    const secondIndex = randomRange(50);
    const secondCard = deck[secondIndex];
    deck.splice(secondIndex, 1);

    const thirdIndex = randomRange(49);
    const thirdCard = deck[thirdIndex];
    deck.splice(thirdIndex, 1);



    return (
    <div>
        Game Screen
        
            <img src={`src/assets/${firstCard.value}_of_${firstCard.suit}.png`} width={200} className="card"></img>
            <img src={`src/assets/${secondCard.value}_of_${secondCard.suit}.png`} width={200} className="card"></img>
            <img src={`src/assets/${thirdCard.value}_of_${thirdCard.suit}.png`} width={200} className="card"></img>
 

    </div>
    )

}


export default Game;