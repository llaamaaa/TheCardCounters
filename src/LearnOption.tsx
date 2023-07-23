import { useNavigate } from "react-router-dom";
import "./Play.css";

const LearnOptionPage: React.FC = () => {
    
    const navigate = useNavigate();
    
    
    return (<div>
        <div className="navButton backButton" onClick={(() => navigate("/"))}>
                    Back
                </div>
        
        <div className="navButton gameButton" onClick={(() => navigate("/Learn"))}>
                    Learn Basic Strategy!
                </div>
         <div className="navButton gameButton" onClick={(() => navigate("/CardCountingPage"))}>
                    Learn Card Counting!
                </div>
    </div>
    
    )
    
}

export default LearnOptionPage;