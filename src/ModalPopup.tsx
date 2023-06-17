import './ModalPopup.css'
import { Card, CardSuit, CardValue, myRandomInts, randomRange } from "./utils";
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

interface DataProps{} {

}

const checkplay = (firstCard: Card | undefined,secondCard: Card|undefined,thirdCard: Card|undefined,btnClicked : String) => {
    const x = data[secondCard["value"]]
    const card1 = convertCardValueToNumber(firstCard);
    const card3 = convertCardValueToNumber(thirdCard);
    if (card1 + "" + card3 === "ace10" || card1 + "" + card3 === "10ace") {
        return 'blackjack!'
    }


    else if (x[firstCard?.value + "_" + thirdCard?.value] == btnClicked) {
        return "Win";
    } else{
return "loser hahah";
    }

}

const ModalPopup: React.FC<ModalPopupProps> = ({title, onPressOk, firstCard, secondCard, thirdCard, btnClicked}) => {
    console.log(firstCard,secondCard,thirdCard,btnClicked)
    console.log(checkplay(firstCard,secondCard,thirdCard,btnClicked))
    return <div className='modalContainer'>
        {checkplay(firstCard,secondCard,thirdCard,btnClicked)}
        <button onClick={() => onPressOk()} className='modalButton'>Ok</button>
    </div>
}
export default ModalPopup;