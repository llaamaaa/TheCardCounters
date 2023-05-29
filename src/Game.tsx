import { Card, CardSuit, CardValue, myRandomInts, randomRange } from "./utils";
import "./Game.css"
import { useEffect, useState } from "react";
import ModalPopup from "./ModalPopup";
import { useNavigate } from "react-router-dom";

const convertCardValueToNumber = (card: Card) => {
    if (card.value === CardValue.TEN || card.value === CardValue.JACK || card.value === CardValue.QUEEN || card.value === CardValue.KING) {
        return "10";
    } else {
        return card.value;
    }
}



const Game: React.FC = () => {
    const navigate = useNavigate();
    const [startGame, setStartGame] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [gameCount, setGameCount] = useState(0);
    const [firstCard, setFirstCard] = useState<Card>();
    const [secondCard, setSecondCard] = useState<Card>();
    const [thirdCard, setThirdCard] = useState<Card>();
    const deck = (Object.values(CardValue).flatMap(cardValue => {
        return Object.values(CardSuit).map(cardSuit => {
            return {value: cardValue as CardValue, suit: cardSuit as CardSuit}
        })
    }));
   
    useEffect(() => {
        const getCard = () => {
            const arr = myRandomInts(3, 51);
            setFirstCard(deck[arr[0]]);
            setSecondCard(deck[arr[1]]);
            setThirdCard(deck[arr[2]]);
        }
        getCard();
}, [gameCount]);
    
      

    const renderStartScreen = () => {
        return <div>
            <button onClick={() => setStartGame(true)}>Start Game</button>
        </div>
    }

    console.log(deck);

    const renderGame = () => {
        return (<div className="gameView">
            <div className="topView">
                <button onClick={(() => navigate("/Play"))}> Exit </button>
                <div className="gameCount">Number of Games played:{gameCount}</div >

            </div>
        <div className="dealerView">
            <img src={`src/assets/${secondCard?.value}_of_${secondCard?.suit}.png`} width={130} className="dealerCard"></img>
        </div>
        <div className="playerView">
            <img src={`src/assets/${firstCard?.value}_of_${firstCard?.suit}.png`} width={130} className="playerCard1"></img>
            <img src={`src/assets/${thirdCard?.value}_of_${thirdCard?.suit}.png`} width={130} className="playerCard2"></img>
            <div className="buttonView">
                <button  onClick = {() => setModalVisible(true)} disabled = {modalVisible}>
                    Hit
                </button>
                <button onClick={() => setModalVisible(true)} disabled = {modalVisible}>
                    Stand
                </button>
                <div>
                <button onClick={() => setModalVisible(true)} disabled = {modalVisible}>
                    Double down 
                </button>
                <button disabled={convertCardValueToNumber(firstCard!) !== convertCardValueToNumber(thirdCard!) || modalVisible} onClick={() => setModalVisible(true)}>
                    Split
                </button>
                </div>
            </div>
        </div>
        {modalVisible && <ModalPopup title="New hand" onPressOk={() => {
            setModalVisible(false);
            setGameCount(prevState => prevState+1)}}/>}
        </div>)
    }

    return (
        startGame ? renderGame() : renderStartScreen()
    )
}


export default Game;

/*

*/