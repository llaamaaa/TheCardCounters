// import { Card, CardSuit, CardValue, myRandomInts, getValue} from "./utils";
// import "./Game.css"
// import { useEffect, useState } from "react";
// import ModalPopup, { checkplay } from "./ModalPopup";
// import { useNavigate } from "react-router-dom";
// // import data from './utils/strategy.json';

// export const convertCardValueToNumber = (card: Card) => {
//     if (card.value === CardValue.TEN || card.value === CardValue.JACK || card.value === CardValue.QUEEN || card.value === CardValue.KING) {
//         return "10";
//     } else {
//         return getValue(card.value);
//     }
// }





// const CardCount: React.FC = () => {
//     const navigate = useNavigate();
//     const [startGame, setStartGame] = useState(false);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [gameCount, setGameCount] = useState(0);
//     const [currentCardCount, setCurrectCardCount] = useState(0);
//     const [correctGameCount, setCorrectGameCount] = useState(0);
//     const [firstCard, setFirstCard] = useState<Card>();
//     const [secondCard, setSecondCard] = useState<Card>();
//     const [thirdCard, setThirdCard] = useState<Card>();
//     const [buttonClick, setButtonClick] = useState<String>("");
//     const deck = (Object.values(CardValue).flatMap(cardValue => {
//         return Object.values(CardSuit).map(cardSuit => {
//             return {value: cardValue as CardValue, suit: cardSuit as CardSuit}
//         })
//     }));
   
//     useEffect(() => {
//         const getCard = () => {
//             const arr = myRandomInts(3, 51);
           
//             setFirstCard(deck[arr[0]]);
//             setSecondCard(deck[arr[1]]);
//             setThirdCard(deck[arr[2]]);
//         }
//         getCard();
//     }, [gameCount]);

//     useEffect(() => {
//         const card1 = firstCard ? convertCardValueToNumber(firstCard) : "";
//         const card3 = thirdCard ? convertCardValueToNumber(thirdCard) : "";


//         if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
//         setModalVisible(true);
//         setButtonClick("blackjack");
//         }
//     }, [firstCard, thirdCard]);

      
//     const btnClickFn = (text: String) => {
//         setModalVisible(true);
//         setButtonClick(text);
//     }

//     const renderStartScreen = () => {
//         return <div>
//             <button onClick={() => setStartGame(true)}>Start Game</button>
//         </div>
//     }

//     const convertCardValueToCount = (card: Card) => {
//         if (convertCardValueToNumber(card) === '10' || convertCardValueToNumber(card) === 'ace') {
//             return 1;
//         } else if (convertCardValueToNumber(card) === '2' || convertCardValueToNumber(card) === '3'|| convertCardValueToNumber(card) === '4'
//         || convertCardValueToNumber(card) === '5'|| convertCardValueToNumber(card) === '6') {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
    

//     const updateCardCount = () => {
//         const change = convertCardValueToCount(firstCard!) + convertCardValueToCount(secondCard!) + convertCardValueToCount(thirdCard!);
//         setCurrectCardCount(prevState => prevState + change);
//     }

//     const handleCardCountResult = (input: number) => {
        
//         if (input === currentCardCount) {
//           return true;
//         }
//         return false;
//       };

//     const renderGame = () => {
        
//         return (<div className="gameView">
//             <div className="topView">
//                 <button onClick={(() => navigate("/Play"))}> Exit </button>
//                 <div className="gameCount">
//                     <p>Number of Correct: {correctGameCount}</p>
//                     <p>Number of Games played:{gameCount}</p>
//                     <p>Percentage correct: {(correctGameCount / gameCount * 100).toPrecision(3)}%</p></div >

//             </div>
//         <div className="dealerView">
//             <img src={`src/assets/${secondCard?.value}_of_${secondCard?.suit}.png`} width={130} className="dealerCard"></img>
//         </div>
//         <div className="playerView">
//             <img src={`src/assets/${firstCard?.value}_of_${firstCard?.suit}.png`} width={130} className="playerCard1"></img>
//             <img src={`src/assets/${thirdCard?.value}_of_${thirdCard?.suit}.png`} width={130} className="playerCard2"></img>
//             <div className="buttonView">
//             <form onSubmit={(e) => e.preventDefault()}>
//   <input
//     type="number"
//     placeholder="Enter the current count"
//     onChange={(e) => {
//     //   if (handleCardCountResult(e)) {
//     //     updateCardCount();
//     //     setCorrectGameCount((prevState) => prevState + 1);
//     //   }
//     }}
//   />
//   <button type="button" disabled={modalVisible}>
//     What is the current count?
//   </button>
// </form>

//             </div>
//         </div>
//         {modalVisible && <ModalPopup title="New hand" btnClicked={buttonClick} onPressOk={() => {
//                 setModalVisible(false);
//                 setGameCount(prevState => prevState + 1);
                
                
//                 // if (handleCardCountResult(hi)) {
//                 //     setCorrectGameCount(prevState => prevState + 1);
//                 // }
//             } } firstCard={firstCard!} secondCard={secondCard!} thirdCard={thirdCard!}/>}
            
//             {currentCardCount}
//         </div>)
//     }

//     return (
//         startGame ? renderGame() : renderStartScreen()
//     )
// }


// export default CardCount;

