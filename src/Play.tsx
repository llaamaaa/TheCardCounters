import { useNavigate } from "react-router-dom";

const PlayPage: React.FC = () => {
    
    const navigate = useNavigate();
    
    
    return (<div>
        <div className="navButton" onClick={(() => navigate("/"))}>
                    Back
                </div>
        Play Screen
        <div className="navButton" onClick={(() => navigate("/Game"))}>
                    Game!
                </div>
         <div className="navButton" onClick={(() => navigate("/CardCount"))}>
                    CardCount!
                </div>
    </div>
    
    )
    
}

export default PlayPage;