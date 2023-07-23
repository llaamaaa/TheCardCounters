import './ModalPopup.css'
import { Card } from "./utils";
import blackjackData from './utils/strategy';
import { convertCardValueToNumber } from './Game';
import CardCount from './CardCount';

interface ModalPopupProps {
    title: string;
    firstCard: Card;
    secondCard: Card;
    thirdCard: Card; 
    onPressOk: () => void;
    btnClicked: String;
    isCardCount?: boolean;
    win?: boolean;
    correctAns?: String;
}

// interface DataProps{} {

// }

export const checkplay = (firstCard: Card , secondCard: Card,thirdCard: Card,btnClicked : String, win: boolean, isCardCount: boolean, correctAns: string = "") => {
    if (isCardCount) {
        if (win) {
            return "Correct!";
        } else {
            return `Wrong! Correct Count should be ${correctAns} `;
        }
    } else {
        const x = blackjackData[convertCardValueToNumber(secondCard) as keyof typeof blackjackData];
        const card1 = convertCardValueToNumber(firstCard);
        const card3 = convertCardValueToNumber(thirdCard);
        if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
            return 'blackjack!'
        }
        else if (x[(card1 + "_" + card3) as keyof typeof x] === btnClicked) {
            return "Correct!";
        } else{
            return `Wrong! Correct Decision should be to ${x[(card1 + "_" + card3) as keyof typeof x]}`;
        }
    }


}

const ModalPopup: React.FC<ModalPopupProps> = ({onPressOk, firstCard, secondCard, thirdCard, btnClicked, win=true, isCardCount=false, correctAns=""}) => {
    return <div className='modalContainer'>
        {checkplay(firstCard,secondCard,thirdCard,btnClicked, win, isCardCount, correctAns)}
        <button onClick={() => onPressOk()} className='modalButton'>Ok</button>
    </div>
}
export default ModalPopup;