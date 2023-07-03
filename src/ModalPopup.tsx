import './ModalPopup.css'
import { Card } from "./utils";
import data from './utils/strategy.json';
import { convertCardValueToNumber } from './Game';

interface ModalPopupProps {
    title: string;
    firstCard: Card | undefined;
    secondCard: Card | undefined;
    thirdCard: Card | undefined; 
    onPressOk: () => void;
    btnClicked: String;
}

// interface DataProps{} {

// }

export const checkplay = (firstCard: Card , secondCard: Card,thirdCard: Card,btnClicked : String) => {
    const x = data[convertCardValueToNumber(secondCard)];
    const card1 = convertCardValueToNumber(firstCard);
    const card3 = convertCardValueToNumber(thirdCard);
    if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
        return 'blackjack!'
    }

    else if (x[card1 + "_" + card3] === btnClicked) {
        return "Win";
    } else{
        return "loser hahah";
    }

}

const ModalPopup: React.FC<ModalPopupProps> = ({onPressOk, firstCard, secondCard, thirdCard, btnClicked}) => {
    return <div className='modalContainer'>
        {checkplay(firstCard,secondCard,thirdCard,btnClicked)}
        <button onClick={() => onPressOk()} className='modalButton'>Ok</button>
    </div>
}
export default ModalPopup;