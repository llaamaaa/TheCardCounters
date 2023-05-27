import { Card, CardSuit, CardValue, randomRange } from "./utils";


const Game: React.FC = () => {

    const randValue = CardValue[Object.keys(CardValue)[randomRange(12)]];
    const randSuit = CardSuit[Object.keys(CardSuit)[randomRange(3)]];
    const { value, suit }: Card = {value: randValue, suit: randSuit};


    return (
    <div>
        Game Screen
        <a href="https://www.youtube.com/watch?v=PljDuynF-j0&pp=ygUJYmxhY2tqYWNr" target ="_blank">
                    <img src={`src/assets/${value}_of_${suit}.png`} width={200} className="cardimg"></img>
                </a>
    </div>
    )

}


export default Game;