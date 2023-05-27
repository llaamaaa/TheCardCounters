import { Card } from "./utils";

interface GameProps {
    card: Card;
}

const Game: React.FC<GameProps> = ({card}) => {

    const { value, suit } = card;


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