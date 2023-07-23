import { useNavigate } from "react-router-dom";
import "./Play.css";

const PlayPage: React.FC = () => {
    
    const navigate = useNavigate();
    
    
    return (<div>
        <div className="navButton backButton" onClick={(() => navigate("/"))}>
                    Back
                </div>
        
        <div className="navButton gameButton" onClick={(() => navigate("/Game"))}>
                    Basic Strategy Practice!
                </div>
         <div className="navButton gameButton" onClick={(() => navigate("/CardCount"))}>
                    Card Counting Practice!
                </div>
    </div>
    
    )
    
}

export default PlayPage;