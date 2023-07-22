import './ModalPopup.css'
import { Card } from "./utils";
import blackjackData from './utils/strategy';
import { convertCardValueToNumber } from './Game';

interface ModalPopupProps {
    title: string;
    firstCard: Card;
    secondCard: Card;
    thirdCard: Card; 
    onPressOk: () => void;
    btnClicked: String;
}

// interface DataProps{} {

// }

export const checkplay = (firstCard: Card , secondCard: Card,thirdCard: Card,btnClicked : String) => {
    const x = blackjackData[convertCardValueToNumber(secondCard) as keyof typeof blackjackData];
    const card1 = convertCardValueToNumber(firstCard);
    const card3 = convertCardValueToNumber(thirdCard);
    if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
        return 'blackjack!'
    }

    else if (x[(card1 + "_" + card3) as keyof typeof x] === btnClicked) {
        return "Win";
    } else{
        return "🙅🏻‍♂️";
    }

}

const ModalPopup: React.FC<ModalPopupProps> = ({onPressOk, firstCard, secondCard, thirdCard, btnClicked}) => {
    return <div className='modalContainer'>
        {checkplay(firstCard,secondCard,thirdCard,btnClicked)}
        <button onClick={() => onPressOk()} className='modalButton'>Ok</button>
    </div>
}
export default ModalPopup;