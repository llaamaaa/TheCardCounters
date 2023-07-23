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
}

// interface DataProps{} {

// }

export const checkplay = (firstCard: Card , secondCard: Card,thirdCard: Card,btnClicked : String, win: boolean, isCardCount: boolean) => {
    if (isCardCount) {
        if (win) {
            return "Win";
        } else {
            return "🙅🏻‍♂️";
        }
    } else {
        const x = blackjackData[convertCardValueToNumber(secondCard) as keyof typeof blackjackData];
        const card1 = convertCardValueToNumber(firstCard);
        const card3 = convertCardValueToNumber(thirdCard);
        console.log('hah',  x[(card1 + "_" + card3) as keyof typeof x]);
        console.log('gay',  btnClicked);
        console.log('result', x[(card1 + "_" + card3) as keyof typeof x] === btnClicked)
        if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
            return 'blackjack!'
        }
        else if (x[(card1 + "_" + card3) as keyof typeof x] === btnClicked) {
            return "Win";
        } else{
            return "🙅🏻‍♂️";
        }
    }


}

const ModalPopup: React.FC<ModalPopupProps> = ({onPressOk, firstCard, secondCard, thirdCard, btnClicked, win=true, isCardCount=false}) => {
    return <div className='modalContainer'>
        {checkplay(firstCard,secondCard,thirdCard,btnClicked, win, isCardCount)}
        <button onClick={() => onPressOk()} className='modalButton'>Ok</button>
    </div>
}
export default ModalPopup;