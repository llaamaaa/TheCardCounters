import './ModalPopup.css'

interface ModalPopupProps {
    title: string;
    onPressOk: () => void;
}

const ModalPopup: React.FC<ModalPopupProps> = ({title, onPressOk}) => {
    return <div className='modalContainer'>
        {title}
        <button onClick={() => onPressOk()}>Ok</button>
    </div>
}
export default ModalPopup;