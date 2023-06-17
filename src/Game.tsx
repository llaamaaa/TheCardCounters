import { Card, CardSuit, CardValue, myRandomInts, randomRange } from "./utils";
import "./Game.css"
import { useEffect, useState } from "react";
import ModalPopup, { checkplay } from "./ModalPopup";
import { useNavigate } from "react-router-dom";
import data from './utils/strategy.json';

export const convertCardValueToNumber = (card: Card) => {
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
    const [correctGameCount, setCorrectGameCount] = useState(0);
    const [firstCard, setFirstCard] = useState<Card>();
    const [secondCard, setSecondCard] = useState<Card>();
    const [thirdCard, setThirdCard] = useState<Card>();
    const [buttonClick, setButtonClick] = useState<String>("");
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

    useEffect(() => {
        const card1 = firstCard ? convertCardValueToNumber(firstCard) : "";
        const card3 = thirdCard ? convertCardValueToNumber(thirdCard) : "";


        if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
        setModalVisible(true);
        setButtonClick("blackjack");
        }
    }, [firstCard, thirdCard]);

      
    const btnClickFn = (text: String) => {
        setModalVisible(true);
        setButtonClick(text);
    }

    const renderStartScreen = () => {
        return <div>
            <button onClick={() => setStartGame(true)}>Start Game</button>
        </div>
    }

    const handleGameResult = () => {
        const result = checkplay(firstCard, secondCard, thirdCard, buttonClick);
        if (result === "Win" || result === "blackjack!") {
          return true;
        }
        return false;
      };

    const renderGame = () => {
        
        return (<div className="gameView">
            <div className="topView">
                <button onClick={(() => navigate("/Play"))}> Exit </button>
                <div className="gameCount">
                    <h1>Number of Correct: {correctGameCount}</h1>Number of Games played:{gameCount}</div >

            </div>
        <div className="dealerView">
            <img src={`src/assets/${secondCard?.value}_of_${secondCard?.suit}.png`} width={130} className="dealerCard"></img>
        </div>
        <div className="playerView">
            <img src={`src/assets/${firstCard?.value}_of_${firstCard?.suit}.png`} width={130} className="playerCard1"></img>
            <img src={`src/assets/${thirdCard?.value}_of_${thirdCard?.suit}.png`} width={130} className="playerCard2"></img>
            <div className="buttonView">
                <button  onClick = {() => btnClickFn("hit")} disabled = {modalVisible}>
                    Hit

                </button>
                <button onClick={() => btnClickFn("stand")} disabled = {modalVisible}>
                    Stand
                </button>
                <div>
                <button onClick={() => btnClickFn("double")} disabled = {modalVisible}>
                    Double down 
                </button>
                <button disabled={!firstCard || !thirdCard || convertCardValueToNumber(firstCard!) !== convertCardValueToNumber(thirdCard!) || modalVisible} onClick={() => setModalVisible(true)}>

                    Split
                </button>
                </div>
            </div>
        </div>
        {modalVisible && <ModalPopup title="New hand" btnClicked={buttonClick} firstCard = {firstCard} secondCard = {secondCard} thirdCard = {thirdCard} onPressOk={() => {
            setModalVisible(false);
            setGameCount(prevState => prevState+1);
            if (handleGameResult()) {
                setCorrectGameCount(prevState => prevState + 1)
            }}}/>}
            
        </div>)
    }

    return (
        startGame ? renderGame() : renderStartScreen()
    )
}


export default Game;

